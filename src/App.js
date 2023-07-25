import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
