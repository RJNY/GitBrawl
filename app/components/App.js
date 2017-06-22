import React from 'react';
import Nav from './Nav.js'
import Home from './Home.js'
import Popular from './Popular.js'
import Battle from './Battle.js'
import Results from './Results.js'
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route path='/battle/results' component={Results} />
            <Route render={function () { return <h1>Page Not Found</h1> }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
