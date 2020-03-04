'use strict';

const {Graph, Vertex} = require('../../breadthFirst/breadth-first.js');
const getEdge = require('../get-edge.js');

describe('getEdge - find out cost of trip', () => {
  const graph = new Graph();

  it('can calculate the cost of a trip', () => {
    let seattle = new Vertex('Seattle');
    let miami = new Vertex('Miami');
    let portland = new Vertex('Portland');
    graph.addNode(seattle);
    graph.addNode(miami);
    graph.addNode(portland);
    graph.addEdge(seattle, miami, 320);
    graph.addEdge(miami, portland, 200);

    let destinations = ['Seattle', 'Miami','Portland'];
    let results = getEdge(destinations, graph);
    expect(results).toEqual(520);
  });

  it('should throw an error. Missing city in map', () => {
    let newYork = new Vertex('NewYork');
    let chicago = new Vertex('Chicago');

    graph.addNode(newYork);
    graph.addNode(chicago);
    graph.addEdge(newYork, chicago);

    let destinations = ['NewYork', 'Chicago'];

    expect(()=>{
      graph.getEdge(destinations).toThrow();
    });
  });

});