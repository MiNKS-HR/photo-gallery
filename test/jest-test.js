import jest from 'jest';

// const gallery = require('../components/gallery.jsx');
const add = require('./add');

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
