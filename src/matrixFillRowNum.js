module.exports = function matrixFillRowNum(data) {
  var counter = 0;
  console.log(data);
  var newArray = [];

  data.forEach(function (columns, i) {
    newArray[i] = [];
    columns.forEach(function (item) {
      newArray[i].push(counter);
    });

    counter++;
  });

  return newArray;
}