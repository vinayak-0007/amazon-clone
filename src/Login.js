import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import { auth } from "./fireBase";

function Login () {
  const history = useHistory();
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );

  const signIn = ( e ) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword( email, password )
      .then( ( auth ) => {
        history.push( '/' );
      })
      .catch( error => alert( error.message ) );
  };
  const register = ( e ) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword( email, password )
      .then( ( auth ) => {
        if ( auth )
        {
          history.push( '/' );
        }
        
      } ).catch( error => alert( error.message ) )
  };

  return <div className='login'>
    <Link to="/"  >
      <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />
    </Link>
    <div className="login_container">
      <h1>Sign-In</h1>
      <form action="">
        <h5>E-mail</h5>
        <input type="text" value={email}  onChange={e =>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type="password" value={password}  onChange={e => setPassword(e.target.value)}/>
        <button className='login_signInButton' onClick={signIn}>Sign-In</button>
      </form>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem repellendus eaque minus dolor temporibus maxime doloribus at vero, necessitatibus explicabo amet sequi veritatis commodi porro delectus beatae minima quo.</p>
      <button className='login_registerButton' onClick={register}>Create Your account</button>
    </div>
  </div>;
}

export default Login;
