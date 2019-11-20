import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">

      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong></p>

        <form>
          <label htmlFor="email"> Email *</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Seu melhor email"/>

            <button className="btn" type="submit">Entrar</button>
        </form>
      </div>

    </div>
  );
}

export default App;
