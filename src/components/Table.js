// fazer a table aqui com o header sendo chamado com um map do resultado da api
// depois fazer um pam de cada linha com as 13 infos
// estrutura: <table>
//   <thead>
//     <tr>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>

//       </td>
//     </tr>
//   </tbody>
// </table>
import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { filtered } = useContext(PlanetsContext);
  // PARA REFATORAÇÂO - buscar fazer a th automatica
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((planet, id) => (
          <tr key={ id }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;