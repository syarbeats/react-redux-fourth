import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { updateUser } from "./action/userAction";
import { deleteUser } from "./action/userAction";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchEmployees } from "./action/employeeAction";


class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onUpdateUserOnChange = this.onUpdateUserOnChange.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
  }

  componentWillMount() {
    fetchEmployees();
  }

  renderEmployee({id, name, salary}){
    return(
        <li className="list-group-item" key={id}>
          <span className="label label-default label-pill pull-xs-right">
            <a href={name}>{ name }</a>
          </span>
          {salary}
        </li>
    );
  }

  onUpdateUser(){
    this.props.onUpdateUser('Goerge Harisson');
  }

  onUpdateUserOnChange(event){
    this.props.onUpdateUserOnChange(event.target.value);
  }

  onDeleteUser(){
    this.props.onDeleteUser('Paul McCartney');
  }

  render() {
    return (
        <div className="App">
          <header>
          </header>
          <main>
            <p>React-Redux Learning</p>
            <p>Check inspect element for checking the state</p>

            <div onClick={this.onUpdateUser}>
              <p>Or Clik Me to Update User !!!</p>
            </div>
            <div>
              <input onChange={this.onUpdateUserOnChange}/>
            </div>
            <div>
              { this.props.user }
            </div>
            <div>
              Product: { this.props.products[0].name } {this.props.userPlusProps}
            </div>
            <div>
              <button onClick={this.onDeleteUser}>Delete User</button>
            </div>
            <div>
              <h4>Employee Directory</h4>
              <ul className="list-group">
                {this.renderEmployee}
              </ul>
            </div>
          </main>
        </div>
    );
  }
}


const mapStateToProps = (state, props) => {

  console.log(props);

  return{
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`,
    employee: state.employee
  }
}

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators({
    onUpdateUser: updateUser,
    onUpdateUserOnChange: updateUser,
    onDeleteUser: deleteUser
  }, dispatch);
}

/*const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return{};
}*/

export default connect(mapStateToProps,mapActionsToProps)(App);