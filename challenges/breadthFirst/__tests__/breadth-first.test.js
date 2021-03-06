const { Graph, Vertex, Edge } = require('../breadth-first.js');

'use strict';

describe('Graph algorithm testing', () => {
  const graph = new Graph();

  afterEach(() => {
    graph.adjacencyList.clear();
  });

  it('Node can be successfully added to the graph', () => {
    let addVertex = new Vertex(1);
    graph.addNode(addVertex);
    expect(graph.adjacencyList.get(addVertex)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    graph.addNode(vertex1);
    graph.addNode(vertex2);
    graph.addEdge(vertex1, vertex2);

    let expected = [new Edge(new Vertex(2),0)];
    expect(graph.adjacencyList.get(vertex1)).toStrictEqual(expected);
  });

  it('should return array of vertex', () => {
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    graph.addNode(vertex1);
    graph.addNode(vertex2);
    graph.addNode(vertex3);
    graph.addEdge(vertex1, vertex2);
    graph.addEdge(vertex1, vertex3);

    let result = graph.getNodes();
    expect(result).toEqual([vertex1, vertex2, vertex3]);
  });

  it('gets a collection of all nodes can be properly retrieved from the graph', () => {
    let vertex1 = new Vertex('One');
    let vertex2 = new Vertex('Two');
    let vertex3 = new Vertex('Three');

    graph.addNode(vertex1);
    graph.addNode(vertex2);
    graph.addNode(vertex3);
    graph.addEdge(vertex1, vertex2);
    graph.addEdge(vertex1, vertex3);

    let nodes = graph.getValues();
    expect(nodes).toEqual([ 'One', 'Two', 'Three' ]);
  });

  it('gets all appropriate neighbors retrieved from the graph', () => {
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    graph.addNode(vertex1);
    graph.addNode(vertex2);
    graph.addEdge(vertex1, vertex2);
    let expected = [{vertex: { value: 2 }, weight: 0} ];

    expect(graph.getNeighbors(vertex1)).toEqual(expected);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    graph.addNode(vertex1);
    graph.addNode(vertex2);
    graph.addEdge(vertex1, vertex2);
    let expected = 2;

    expect(graph.size()).toEqual(expected);
  });

});

// BREADTH FIRST TESTING
describe('Graph Breadth First', () => {

  let graph;
  let firstNode;
  beforeEach(() => {
    graph = new Graph();
    firstNode = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let vertex4 = new Vertex(4);
    graph.addNode(firstNode);
    graph.addNode(vertex2);
    graph.addNode(vertex3);
    graph.addNode(vertex4);
    graph.addEdge(firstNode, vertex2);
    graph.addEdge(firstNode, vertex3);
    graph.addEdge(vertex3, vertex4);
  });
  
  it('Returns the values in the set', () => {
    let set = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
    ];
    expect(graph.breadthFirst(firstNode)).toEqual(set);
  });
  
  it('Returns error when given an invalid starting node', () => {
    expect(graph.breadthFirst('test')).toEqual('Invalid Node');
  });
  
  it('Returns error on invalid starting node', () => {
    const graph2 = new Graph();
    expect(graph2.breadthFirst(firstNode)).toEqual('Graph is empty');
  });
  
});
  