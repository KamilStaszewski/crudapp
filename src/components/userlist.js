import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from '../actions/ui_actions';


class Userlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: this.props.ui.users,
         name: '',
         email: ''
      }
    }


    handleChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
    }



    componentWillReceiveProps = () => {
      this.setState({
        name: ''
      })
    }

   
    render() {
      return (
        <div>
          <form onSubmit={(e) => this.props.uiActions.addUser(e, this.state.name, this.state.email)}>
            <input type="text"
                   name="name"
                   value={this.state.name}
                   onChange={this.handleChange}/>
          </form>
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