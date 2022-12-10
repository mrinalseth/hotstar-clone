
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route exact path='/home'><Home/></Route>
        </Switch>
      </Router> 
    </div>
  )
}

export default App;
