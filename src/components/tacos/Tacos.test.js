import Taco from './Taco';
import React from 'react';
import renderer from 'react-test-renderer';


describe('taco', () => {
  it('matches a snapshot', () => {
    const taco = {
      name: 'Tasty Taco',
      rating: '3',
      price: '3',
      vibes: '3'
    };

    const tree = renderer.create(
      <Taco taco={taco} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
