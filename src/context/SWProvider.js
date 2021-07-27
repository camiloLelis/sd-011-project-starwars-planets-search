import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

export default function SWProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  function savePlanets(data) {
    setPlanets(data);
    setIsLoading(false);
  }

  function changeLoading() {
    setIsLoading(true);
  }

  function changeFiltersByName(value) {
    const newFilter = filters;
    newFilter.filterByName.name = value;
    setFilters(newFilter);
  }

  function saveFilteredPlanets(arrayFilteredPlanets) {
    setFilteredPlanets(arrayFilteredPlanets);
  }

  const context = {
    planets: filteredPlanets,
    savePlanets,
    isLoading,
    changeLoading,
    filters,
    setFilters: changeFiltersByName,
    planetsToFilter: planets,
    saveFilteredPlanets,
  };

  return (
    <div>
      <SWContext.Provider value={ context }>
        { children }
      </SWContext.Provider>
    </div>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};