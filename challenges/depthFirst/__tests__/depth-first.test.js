'use strict';

const {Graph, Vertex} = require('../../breadthFirst/breadth-first.js');
const depthFirst = require('../depth-first.js');

describe('Depth First Graph Testing', () => {
  
  const graph = new Graph();

  it('Graph traverses properly', () => {
    let a = new Vertex('A');
    let b = new Vertex('B');
    let c = new Vertex('C');
    let d = new Vertex('D');

    graph.addNode(a);
    graph.addNode(b);
    graph.addNode(c);
    graph.addNode(d);

    graph.addEdge(a, c);
    graph.addEdge(c, d);
    graph.addEdge(a, b);
    let result = depthFirst(graph);
    expect(result[0]).toEqual(a);
    expect(result[1]).toEqual(b);
    expect(result[2]).toEqual(c);
    expect(result[3]).toEqual(d);

  });

});