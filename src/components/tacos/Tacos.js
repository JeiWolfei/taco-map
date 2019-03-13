import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';
import Taco from './Taco';
import withFetch from '../fetch/Fetch';
// import { getTacos, getLocations } from mock
export class Tacos extends PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired
  };

  render() {
    const tacos = this.props.results.map(taco => {
      return (
        <Taco key={taco.id} taco={taco} />
      );
    });
    return (
      <div>
        {tacos}
      </div>
    );
  }
}

const FetchTacos = withFetch(Tacos)(getTacos);

export const TacosWithPaging = withPaging(FetchTacos);
