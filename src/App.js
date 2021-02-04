import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
// import {Card} from './components/card/card.component'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  // super calls constructor method on Component class
  // This then gives us access to this.state
  super();
  // state property now exists on the class App
  //Better to use setState instead of mutating this.state
  this.state = {
    // can set a propert to the state object
    // giving each value a key so react knows what element to update
    // in case one of the values in the array changes
    monsters: [],
    searchField: ''
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
}
// same as handleChange = e => ({})
handleChange = e => {
  this.setState({searchField: e.target.value})
}

render(){
  const {monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(goon=>
    goon.name.toLowerCase().includes(searchField.toLowerCase())
  )
  return(
    <div className='App'>
      <h1>Monster Cards</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={this.handleChange}
        />
      <CardList goons={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
