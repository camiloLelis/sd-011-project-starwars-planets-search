async function fetchPlanetsOnAPI() {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = await result.json();
  // console.log(response.results);
  return response.results;
}

export default fetchPlanetsOnAPI;
