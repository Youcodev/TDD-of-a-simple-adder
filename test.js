let assert = require('assert');
let add = require('./add')

describe('Calculator', () => {
  describe('Adding nothing', () => {
    it('should return 0', function() {
      assert.equal(add(""), 0);
    })
  })

  describe('Inputting one-digit positive value', () => {
    it('should return 2', function() {
      assert.equal(add("2"), 2);
    })
  })
  
  describe('Inputting two-digit positive value', () => {
    it('should return 14', function() {
      assert.equal(add("14"), 14);
    })
  })
  
  describe('Inputting one-digit negative value', () => {
    it('should return -4', function() {
      assert.equal(add("-4"), -4);
    })
  })
  
  describe('Inputting two-digit negative value', () => {
    it('should return -14', function() {
      assert.equal(add("-14"), -14);
    })
  })
  
  describe('Adding two one-digit positive values', () => {
    it('should return 5', function() {
      assert.equal(add("2,3"), 5);
    })
  })
  
  describe('Adding two positive values', () => {
    it('should return 17', function() {
      assert.equal(add("12,5"), 17);
    })
  })

describe('Adding two values one of which is negative', () => {
    it('should return 9', function() {
      assert.equal(add("13,-4"), 9);
    })
  })
  
  describe('Adding two negative values', () => {
    it('should return -17', function() {
      assert.equal(add("-13,-4"), -17);
    })
  })
  
  describe('Adding three one-digit positive values', () => {
    it('should return 10', function() {
      assert.equal(add("2,3,5"), 10);
    })
  })
  
  describe('Adding three one-digit nagative values', () => {
    it('should return -10', function() {
      assert.equal(add("-2,-3,-5"), -10);
    })
  })
  
  describe('Adding positive values', () => {
    it('should return 35', function() {
      assert.equal(add("11,10,2,3,5,1,3"), 35);
    })
  })
  
  describe('Adding positive and negative values', () => {
    it('should return 23', function() {
      assert.equal(add("11,10,-2,3,5,-1,-3"), 23);
    })
  })
  
  describe('Adding positive values on multiple lines', () => {
    it('should return 6', function() {
      assert.equal(add("1\n2,3"), 6);
    })
  })
  
  describe('Adding negative values on multiple lines', () => {
    it('should return -6', function() {
      assert.equal(add("-1\n-2,-3"), -6);
    })
  })
  
  describe('Adding positive and negative values on multiple lines', () => {
    it('should return 3', function() {
      assert.equal(add("-1\n-2,3\n4\n5,-6"), 3);
    })
  })
  
  describe('Inputting an incorrect string format', () => {
    it('should return an error message', function() {
      assert.equal(add("1,\n"), "Incorrect string format !");
    })
  })
  
  describe('Adding two positive values separated by a semicolon', () => {
    it('should return 3', function() {
      assert.equal(add("//;\n1;2"), 3);
    })
  })
  
  describe('Adding two negative values separated by an at sign', () => {
    it('should return 3', function() {
      assert.equal(add("//@\n-1@-2"), -3);
    })
  })
  
  describe('Adding positive and negative values separated by an arrow made from an equals sign followed by a greater-than sign', () => {
    it('should return -12', function() {
      assert.equal(add("//=>\n1=>2=>-5=>-7=>10=>-15=>2"), -12);
    })
  })
  
}); 
