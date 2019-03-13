import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => requestFn => {
  class WithFetch extends PureComponent {
    static propTypes = {
      page: PropTypes.number,
      updateTotalPages: PropTypes.func.isRequired
    };

    static defaultProps = {
      page: 1
    };

    state = {
      results: []
    };

    fetchResults = () => {
      requestFn(this.props.page)
        .then(response => {
          this.props.updateTotalPages(response.totalPages);
          this.setState({ results: response.results });
        });
    };

    componentDidMount() {
      this.fetchResults();
    }

    compoentDidUpdate(prevProps) {
      if(prevProps.page !== this.props.page) {
        this.fetchResults();
      }
    }

    render() {
      return (
        <Component results={this.state.results}
          {...this.props} />
      );
    }
  }

  return WithFetch;
};
