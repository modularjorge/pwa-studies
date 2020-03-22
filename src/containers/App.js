import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    users: state.requestRobots.users,
    isPending: state.requestRobots.pending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

componentDidMount(){
  this.props.onRequestRobots();
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(json => this.setState({users: json}))
}

// onSearchChange = (e) => {
//   this.setState({search: e.target.value});
// }
  render() {
    // const {users} = this.props;
    const { searchField, onSearchChange, users, isPending } = this.props;
  return (
    <div className="App">
    <Header />
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox searchChange={onSearchChange}/>
        <CardsList users={users} search={searchField}/>
      </div>
    </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
