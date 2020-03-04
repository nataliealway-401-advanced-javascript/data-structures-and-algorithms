'use struict';

module.exports = (destinations, graph) => {

  let startingCity;
  let vertexCity = graph.getNodes();
  let cityValue = vertexCity.map(key => key.value);
  for(let city of destinations){
    if(!cityValue.includes(city)){
      throw new Error('Error: City does not exist in record');
    }
  }

  let total = 0;


  for(let city of vertexCity){
    if (city.value === destinations[0]){
      startingCity = city;
    }
  }

  for(let i = 1; i < destinations.length; i++){
    let neighbors = graph.getNeighbors(startingCity);
    for (let city of neighbors){
      if(city.vertex.value === destinations[i]){
        startingCity = city.vertex;
        total += city.weight;
      }
    }
  }
  return total;
};