import React, * as react from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './Robots';
import Scroll from './Scroll';
import './App.css';

class App extends react.Component {
  constructor(){
    super();
    this.state = {
      'robots': [],
      'searchField': '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({'robots': users}));
  }

  onSearchChange = (event) => {
    this.setState({'searchField': event.target.value})
  }

  render(){
    const filterdRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchField={this.state.searchField} onChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterdRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;