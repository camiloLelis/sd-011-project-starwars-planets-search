import React, { useContext } from 'react';
import ContextMain from '../context/Context';
import SearchBar from './SearchBar';

function Table() {
  const { data } = useContext(ContextMain);
  return (
    <div>
      <SearchBar />
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Climate </th>
            <th> Created </th>
            <th> Diameter </th>
            <th> Edited </th>
            <th> Films </th>
            <th> Gravity </th>
            <th> Orbital Period </th>
            <th> Population </th>
            <th> Rotation Period </th>
            <th> Surface Water</th>
            <th> Terrain </th>
            <th> Url </th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              <td>
                {planet.name}
              </td>
              <td>
                {planet.climate}
              </td>
              <td>
                {planet.created}
              </td>
              <td>
                {planet.diameter}
              </td>
              <td>
                {planet.edited}
              </td>
              <td>
                {planet.films}
              </td>
              <td>
                {planet.gravity}
              </td>
              <td>
                {planet.orbital_period}
              </td>
              <td>
                {planet.population}
              </td>
              <td>
                {planet.rotation_period}
              </td>
              <td>
                {planet.surface_water}
              </td>
              <td>
                {planet.terrain}
              </td>
              <td>
                {planet.url}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default Table;
