var data = require('./testData.js');


function serialize(data, outputFormat) {

  if(outputFormat === 'JSON') {
    return JSON.stringify(data);
  }

  data.forEach(function(entry) {
    if(Array.isArray(entry)) {
      itemIsArray(entry);
    } else if(typeof entry === 'object'){
      itemIsObject(entry);
    }
  })

  function itemIsObject(item) {
    var html = '<dl>';
    for(var key in item) {
      var childItem = item[key];
      html+='\n<dt>'+key+'</dt>';
      html+='\n<dd>'+childItem+'</dd>';
      // console.log(html);
      if(Array.isArray(childItem)) {
        itemIsArray(childItem);
      } else if(typeof childItem === 'object') {
        itemIsObject(childItem);
      }
    }
    html += '</dd>';
    return console.log(html);
  }

  function itemIsArray(item) {
    var html = '<ul>';
    item.forEach(function(item, i) {
      // console.log(html);
      html += '\n<li>'+item+'</li>';
      if(Array.isArray(item)) {
        return itemIsArray(item);
      } else if(typeof item === 'object') {
        itemIsObject(item);
      }
    })
    html+= '\n</ul>'
    return console.log(html);
  }
}

serialize(data, 'HTML');
