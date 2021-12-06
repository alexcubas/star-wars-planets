import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    // console.log(response.results);
    setData(response.results);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const contextValue = {
    data,
    setData,
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
