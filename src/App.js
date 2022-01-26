import './App.css';
import Header from './Header';
import Home from './Home';
import CheckOut from "./CheckOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './fireBase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
function App () {

  const [ user, dispatch ] = useStateValue();

  useEffect( () => {
    //it will run once
    auth.onAuthStateChanged( authUser => {
      console.log( "THE user is ", authUser );
      if ( authUser )
      {
        dispatch( {
          type: "SET_USER",
          user:authUser
        })
      } else
      {
        dispatch( {
          type: "SET_USER",
          user:null
        })
      }
    } )
  },[])


  return (
    <Router>
      <div className="App"> 
        <Switch>
        <Route path="/login">
           <Login />
          </Route>
          <Route path="/checkout">
          <Header />
           <CheckOut />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/"> 
          <Header />  
            <Home />
          </Route>
      </Switch>
    </div>
 </Router>
  );
}

export default App;
