function tpl(data) {
  return template('tpl-info', {
    pictureUrl: data.pictureUrl,
    pictureName: data.pictureName
  });
}

function setTable() {
  var warningTable = $('#warning-table').DataTable({
    'language': {
      url: '../res/lib/datatables.net/dataTable-zh.json'
    },
    'dom': 'rt<"table-bottom"ilp>',
    'autoWidth': false,
    'ordering': false,
    'pagingType': 'full_numbers',
    'ajax': '../res/mockData/warning.json',
    'columns': [
      {'data': null},
      {
        'class': 'warningName',
        'data': 'warningName'
      },
      {
        'class': 'dateTime',
        'data': 'dateTime'
      },
      {
        'class': 'picture',
        'orderable': false,
        'data': function(obj) {
          return tpl(obj.picture);
        }
      }
    ]
  });

  warningTable.on('order.dt search.dt', function () {
    warningTable.column(0, {search:'applied', order:'applied'}).nodes().each(function (cell, i) {
      cell.innerHTML = i + 1;
    });
  }).draw();
}

// 首列设为null，显示序号
// 最后一列自定义内容，传入的obj就是json里每一行的数据，return的是填充了数据的模板字符串
// template是art-template模板引擎的方法，用于生成字符串。