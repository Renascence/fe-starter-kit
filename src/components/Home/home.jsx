import React from 'react';
import './home.less';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SetName from '../../actions/home';

class Home extends React.Component {
  static propTypes = {
    home: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    return <div>
      <p>Home - {this.props.home.name}</p>
      <button onClick={() => {
        this.props.dispatch(SetName(`logging-${Math.random()}`))
      }} >change name</button>
    </div>
  }
}

function mapStatetoProps(store) {
  return { home: store.home };
}

export default connect(mapStatetoProps)(Home);