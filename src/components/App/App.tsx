import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './App.types';

import Example1 from '../example-1/Example-1'

type Props = {
  user: User
  
}

export function App({user}:Props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Type Script from REACT
        </p>
      </header>
      <section>
        <p>
          I am a new user {user.name}
        </p>
        <h2>Example-1</h2>
        <Example1 name={'Marat'} email={'123@gmail.com'} ></Example1>
      </section>
      
    </div>
  );
}
