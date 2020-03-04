'use strict';

/**
 * @function depthFirst
 * @param {*} graph 
 */
function depthFirst(graph) {

  const visited = new Set();
  let stack = [];
  let result = [];
  let array = graph.getNodes();
  let startVertex = array[0];
  
  stack.push(startVertex);
  visited.add(startVertex);


  while(stack.length){
    let current = stack.pop();
    result.push(current);
    let neighbors = graph.getNeighbors(current);
    for(let edge of neighbors){
      let neighborVertex = edge.vertex;
      if(visited.has(neighborVertex)){
        continue;
      }else{
        visited.add(neighborVertex);
      }
      stack.push(neighborVertex);
    }
  }
  return result;
}

module.exports = depthFirst;
