import React from 'react';
import './App.css';
// import fetchAPI from './componentes/API';
// import MyContext from './componentes/MyContext';
import Provider from './componentes/Provider';
import Home from './componentes/home';

function App() {
  return (
    <div>
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
