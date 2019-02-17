import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAddress } from '../actions';

class ExistingAddressFetcher extends Component {
  constructor(props) {
    super(props);

    this.fetchAddress = this.fetchAddress.bind(this);
  }

  fetchAddress() {
    this.props.dispatch(fetchAddress());
  }

  render() {
    return this.props.children(this.fetchAddress);
  }
}

export default connect()(ExistingAddressFetcher);
