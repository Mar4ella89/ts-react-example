import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './App.types';

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
      </section>
      
    </div>
  );
}
