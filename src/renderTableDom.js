module.exports = function renderTableDom(table, data) {

  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j = 0; j < data[i].length; j++) {
      var td = document.createElement('td');
      td.innerHTML = data[i][j];
      tr.appendChild(td);
    }
  }

  return table;

}