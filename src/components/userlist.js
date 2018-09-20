import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from '../actions/ui_actions';


class Userlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: this.props.ui.users
      }
    }

   
    render() {
      console.log(this.props)
      return (
        <div>
          <input type="text"
                 value={this.props.ui.inputName}
                 name="username"
                 onChange={(e) => this.props.uiActions.handleNameChange(e.target.value)}/>
          <input type="text" 
                value={this.props.ui.inputEmail}
                name="email"
                onChange={(e) => this.props.uiActions.handleEmailChange(e.target.value)}/>
        <table>
        <thead>
          <tr>
            <th>LP</th>
            <th>USER</th>
            <th>E-MAIL</th>
          </tr>
        </thead>
        <tbody>
        {this.props.ui.users.map((item, index) => {
        return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
        )
      })}
        </tbody>
        <tfoot>
        </tfoot>
        <button onClick={() => this.props.uiActions.addUser(this.state.username)}>add</button>
      </table>
      </div>
      )
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

export default connect(mapStateToProps, mapDispatchToProps)(Userlist);