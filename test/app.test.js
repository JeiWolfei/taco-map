require('dotenv').config();
const connect = require('../lib/utils/connect');
const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../lib/models/User');
const app = require('../lib/app');

describe('app', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
  });

  afterAll(done => {
    mongoose.connection.close(done);
  });

  it('can /signup a user', () => {
    return request(app)
      .post('/auth/signup')
      .send({ email: 'user@email.com', password: 'password', zipcode: '97101', tags: ['tofu', 'vegan'] })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            _id: expect.any(String),
            email: 'user@email.com',
            zipcode: '97101',
            tags: ['tofu', 'vegan']
          },
          token: expect.any(String)
        });
      });
  });

  it('can let user to signin', () => {
    return User
      .create({
        email: 'user@email.com', password: 'password', zipcode: '97101', tags: ['bean', 'mexican']
      })
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({
            email: 'user@email.com', password: 'password'
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            _id: expect.any(String),
            email: 'user@email.com',
            zipcode: '97101',
            tags: ['bean', 'mexican']
          },
          token: expect.any(String)
        });
      });
  });

  it('has a verify route', () => {
    return User
      .create({
        email: 'user1@email.com', password: 'userpass', zipcode: '97101', tags: ['bean', 'mexican']
      })
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({ email: 'user1@email.com', password: 'userpass', zipcode: '97101', tags: ['bean', 'mexican']
          })
          .then(res => res.body.token);
      })
      .then(token => {
        return request(app)
          .get('/auth/verify')
          .set('Authorization', `Bearer ${token}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          email: 'user1@email.com',
          zipcode: '97101',
          tags: ['bean', 'mexican']
        });
      });
  });
});
