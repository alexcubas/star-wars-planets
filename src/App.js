import React from 'react';
import './App.css';
// import fetchAPI from './componentes/API';
// import MyContext from './componentes/MyContext';
import Provider from './componentes/Provider';
import Table from './componentes/table';

function App() {
  return (
    <div>
      <Provider>
        <span>Hello, App!</span>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
