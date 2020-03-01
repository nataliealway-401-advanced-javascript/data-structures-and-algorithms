'use strict';

const {Graph} = require('../graph');
const {Vertex} = require('../graph');
const {Edge} = require('../graph');

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