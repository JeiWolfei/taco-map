import React, { Component } from 'react';
import Tacos from './tacos/Tacos';
import Paging from './paging/Paging';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 4
  };

  incrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  };

  decrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  };

  updateTotalPages = desiredPages => {
    this.setState({ totalPages: desiredPages });
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <>
        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          increment={this.incrementCurrentPage}
          decrement={this.decrementCurrentPage}
        />

        <Tacos
          page={currentPage}
          updateTotalPages={this.updateTotalPages}/>
      </>
    );
  }
}
