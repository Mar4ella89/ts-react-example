import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './App.types';

import Example1 from '../example-1/Example-1'
import { UserComponent } from '../example-3/Example-3'
import Example4 from '../example-4/Example-4'
import {TextInputWithFocus} from '../example-5/Example-5'


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
        <Example1 name={'Marat'} email={'123@gmail.com'} age={34} ></Example1>
        <h2>Example-3</h2>
        <UserComponent />
        <h2>Example-4</h2>
        <Example4 initialValue={'Enter something'} onSave={ (value)=>{console.log(`Greate! You enter: ${value}`)} }/>
        <h2>Example-5</h2>
        <TextInputWithFocus />
        
      </section>
      
    </div>
  );
}
