var data = require('./testData.js');


function serialize(data, outputFormat) {

  if(outputFormat === 'JSON') {
    return JSON.stringify(data);
  }

  var html = '';

  data.forEach(function(entry) {
    if(Array.isArray(entry)) {
      itemIsArray(entry);
    } else if(typeof entry === 'object'){
      itemIsObject(entry);
    }
  })

  function itemIsObject(item) {
    html += '\n<dl>';
    for(var key in item) {
      var childItem = item[key];
      html+='\n<dt>'+key+'</dt>';
      // console.log(html);
      if(Array.isArray(childItem)) {
        console.log('child array');
        itemIsArray(childItem);
      } else if(typeof childItem === 'object') {
        console.log('child object');
        itemIsObject(childItem);
      } else {
        html+='\n<dd>'+childItem+'</dd>';
      }
    }
    html += '\n</dl>';
    // return console.log(html);
  }

  function itemIsArray(item) {
    html += '\n<ul>';
    item.forEach(function(item, i) {
      // console.log(html);
      if(Array.isArray(item)) {
        return itemIsArray(item);
      } else if(typeof item === 'object') {
        itemIsObject(item);
      } else {
        html += '\n<li>'+item+'</li>';
      }
    })
    html+= '\n</ul>'
  }

  return console.log(html);
}

serialize(data, 'HTML');
