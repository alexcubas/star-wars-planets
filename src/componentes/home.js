import React, { useContext, useEffect } from 'react';
import Table from './table';
import MyContext from './MyContext';

const Home = () => {
  const { setData, newTodo, setNewTodo,
    newState, newsColuns, setNewsColuns, newscolunas, setNewsColunas,
    newsComparison, setnewsComparison, newsValue, setNewsValue } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  };

  const buttonClick = () => {
    if (newsComparison === 'maior que') {
      setData(newState.filter((element) => Number(element[newsColuns])
       > Number(newsValue)));
      setNewsColunas(newscolunas.filter((element) => element !== newsColuns));
      setNewsColuns(newscolunas[0]);
    }

    if (newsComparison === 'menor que') {
      setData(newState.filter((element) => Number(element[newsColuns])
       < Number(newsValue)));
      setNewsColunas(newscolunas.filter((element) => element !== newsColuns));
      setNewsColuns(newscolunas[0]);
    }

    if (newsComparison === 'igual a') {
      setData(newState.filter((element) => Number(element[newsColuns])
       === Number(newsValue)));
      setNewsColunas(newscolunas.filter((element) => element !== newsColuns));
      setNewsColuns(newscolunas[0]);
    }
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
            onChange={ handleChange }
            data-testid="name-filter"
            type="text"
            id="nome"
            name="nome"
          />
        </label>
      </form>
      <form>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setNewsColuns(target.value) }
        >
          {newscolunas.map((element) => (
            <option key={ element }>{ element }</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setnewsComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          value={ newsValue }
          data-testid="value-filter"
          type="number"
          name="valor-filtro"
          id="valor-filtro"
          onChange={ ({ target }) => setNewsValue(target.value) }
        />
        <button
          onClick={ buttonClick }
          data-testid="button-filter"
          type="button"
        >
          filtro
        </button>
      </form>
      <Table />
    </div>
  );
};

export default Home;
