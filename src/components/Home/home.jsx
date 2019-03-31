import React from 'react';
import './home.less';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component{
  static propTypes = {
    home: PropTypes.object
  }
  render() {
    return <p>Home - {this.props.home.name}</p>;
  }
}
function mapStatetoProps(store) {
  return {home: store.home};
}

export default connect(mapStatetoProps)(Home);