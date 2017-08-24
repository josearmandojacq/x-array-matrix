var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix.js');
var matrixFullRowNum = require('./../src/matrixFullRowNum.js');

describe('matrixFullRowNum', function () {
  it('is a function', function () {
    expect(matrixFullRowNum).to.be.a('function');
  });

  it('fill the rows with numbers', function () {
    var matrix = createMatrix(2, 3);
    var result = matrixFullRowNum(matrix);
    expect(result[0]).to.be.a('number');
    expect(result[0][1]).to.be.a('number');
  });
});
