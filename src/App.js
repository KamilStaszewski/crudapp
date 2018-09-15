import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from './actions/ui_actions';
import Userlist from './components/userlist';
import './styles/index.scss';

class App extends React.Component {

  componentDidMount = () => {
    this.props.uiActions.fetchData()
  }
  
  
  render() {
    const { userName, count, webSite } = this.props.ui;
    return (
      <div className="wrapper">
        <Userlist />
        <label>Creator - <a href={webSite} target="_blank">{userName}</a></label>
        <br />
        <div>
          Count is {count}
          <button onClick={this.props.uiActions.incrementCount}>INCREMENT COUNT</button>
          <button onClick={this.props.uiActions.fetchData}>fetch</button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
