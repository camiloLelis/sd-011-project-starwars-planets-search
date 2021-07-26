import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

export default function SearchByNumericValue() {
  const { handleSelectors, selectorsValue } = useContext(TableContext);
  return (
    <div>
      <label htmlFor="column-filter">
        Categoria:
        <select
          id="column-filter"
          data-testid="column-filter"
          onChange={ (event) => handleSelectors(event) }
          value={ selectorsValue[0].column }
          name="column"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Faixa de valor:
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (event) => handleSelectors(event) }
          value={ selectorsValue[0].comparison }
          name="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          onChange={ (event) => handleSelectors(event) }
          value={ selectorsValue[0].value }
          name="value"
        />
      </label>
    </div>
  );
}