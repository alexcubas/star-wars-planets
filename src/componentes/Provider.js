import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const colunas = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [data, setData] = useState([]);
  const [newState, setNewState] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newsColuns, setNewsColuns] = useState('population');
  const [newsComparison, setnewsComparison] = useState('maior que');
  const [newsValue, setNewsValue] = useState('0');
  const [newscolunas, setNewsColunas] = useState(colunas);

  const fetchAPI = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    // console.log(response.results);
    setNewState(response.results);
    setData(response.results);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const contextValue = {
    newscolunas,
    setNewsColunas,
    newsComparison,
    setnewsComparison,
    newsValue,
    setNewsValue,
    newsColuns,
    setNewsColuns,
    data,
    setData,
    newTodo,
    setNewTodo,
    newState,
    setNewState,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
