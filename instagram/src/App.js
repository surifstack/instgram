
import './App.css';
import Header from './compoents/Header'
import Home from './compoents/Home'
import SignUp from './compoents/SignUp'
import SignIn from './compoents/SignIn'
import Profile from './compoents/Profile'
import {Route , Switch} from 'react-router-dom'
import Createpost from './compoents/Createpost'

function App() {
  return (
    <div className="App">
       <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/post"  component={Createpost} />
      </Switch>

   

    </div>
  );
}

export default App;
