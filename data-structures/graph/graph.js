'use strict';

/**
 * @class Vertex
 */
class Vertex {
  constructor(value){
    this.value = value;
  }
}

/**
 * @class Edge
 */
class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight || 0;
  }
}

/**
 * @class Graph
 */
class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  /**
   * Adds a new node value to the vertex
   * @param {*} value 
   */
  addValue(value){
    this.addNode(new Vertex(value));
  }

  /**
   * Adds a vertex to the adjacency list
   * @param {vertex}
   */
  addNode(vertex){
    this.adjacencyList.set(vertex, []);
  }

  /**
   * @function addEdge - adds edges between the start and end vertex
   * @param {*} startVertex 
   * @param {*} endVertex 
   * @param {*} weight 
   */
  addEdge(startVertex, endVertex, weight = 0){
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('ERROR: Invalid Vertices');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  /**
   * Retrieves neighbors of the given vertex
   * @function getNeighbors
   * @param {*} vertex 
   */
  getNeighbors(vertex){
    if(!this.adjacencyList.has(vertex)){
      throw new Error('Error: Invalid vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  /**
   * Returns values of the graph
   * @function getValues
   * @returns {Array} result
   */
  getValues(){
    let result = [];
    let nodes = [ ...this.adjacencyList.keys() ];
    nodes.map(key => {
      key = key.value;
      result.push(key);
    });
    return result;
  }

  /**
   * Retrieves key value pairs of adjacencyList
   * @function getNodes
   * @returns {Array} nodes
   */
  getNodes(){
    let nodes = [ ...this.adjacencyList.keys() ];
    return nodes;
  }

  /**
   * Returns the total size of the adjacencyList
   * @function size
   * @returns size of adjacency list
   */
  size(){
    return this.adjacencyList.size;
  }
}

module.exports = {Vertex, Edge, Graph};