import React, { useContext, useEffect } from 'react';
import Table from './table';
import MyContext from './MyContext';

const Home = () => {
  const { setData, newTodo, setNewTodo,
    newState } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  };
  useEffect(() => {
    setData(newState.filter((element) => element.name.includes(newTodo)));
  }, [newState, newTodo, setData]);

  return (
    <div>
      <form>
        <label htmlFor="nome">
          nome
          {' '}
          <input
            data-testid="name-filter"
            // value={ data }
            onChange={ handleChange }
            type="text"
            id="nome"
            name="nome"
          />
        </label>
      </form>
      <Table />
    </div>
  );
};

export default Home;
