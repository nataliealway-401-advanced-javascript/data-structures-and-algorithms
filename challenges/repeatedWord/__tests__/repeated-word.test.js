'use strict';

const repeatedWord = require('../repeated-word.js');

describe('Retriving the first word in a string that is repeated multiple times', () => {
  it('Retrieves the first repeated work in a string', () => {
    let string = 'the cat in the hat';

    expect(...repeatedWord(string)).toEqual('the');
  });

  it('returns the very first repeated word even when other words have more repition in the string', () => {
    let string = 'meow bark meow bark bark bark';

    expect(...repeatedWord(string)).toEqual('meow');
  });

  it('Retrieves the first repeated work in a very long string', () => {
    let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    expect(...repeatedWord(string)).toEqual('it');
  });


  it('validates that a one line array returns nothing', () => {
    let string = 'meow';

    expect(repeatedWord(string)).toEqual(undefined);
  });

});