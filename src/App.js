import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Preview from './components/Preview.jsx'
import Boxscore from './components/Boxscore.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Link to='/mlb'>MLB</Link>
          <Link to='/nba'>NBA</Link> */}
          <Route exact path='/' component={Preview} />
          <Route path='/games/:id' render={(props) => {
            return <Boxscore {...props}/>
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
