var data = require('./testData.js');


function serialize(data, outputFormat) {

  // use native serialization for JSON formatting
  if(outputFormat === 'JSON') {
    return console.log(JSON.stringify(data, null, 2));
  }

  // output for HTML formatted serialization
  var html = '';

  // check inital data types
  if(Array.isArray(data)) {
    data.forEach(function(entry) {
      if(Array.isArray(entry)) {
        printAsArray(entry);
      } else if(typeof entry === 'object'){
        printAsObject(entry);
      }
    });
  } else if(typeof data === 'object') {
    printAsObject(data);
  } else {
    html+= '<p>'+data+'</p>';
  }

  // loop over nested object and check type of values
  function printAsObject(item) {
    html += '\n<dl>';

    for(var key in item) {
      var childItem = item[key];
      html+='\n<dt>'+key+'</dt>';

      if(Array.isArray(childItem)) {
        printAsArray(childItem);
      } else if(typeof childItem === 'object') {
        printAsObject(childItem);
      } else {
        html+='\n<dd>'+childItem+'</dd>';
      }
    }

    html += '\n</dl>';
  }

  // loop through nested arrays and check type of each element
  function printAsArray(item) {
    html += '\n<ul>';

    item.forEach(function(item, i) {
      if(Array.isArray(item)) {
        printAsArray(item);
      } else if(typeof item === 'object') {
        printAsObject(item);
      } else {
        html += '\n<li>'+item+'</li>';
      }
    })

    html+= '\n</ul>'
  }

  return console.log(html);
}

// default output is HTML
serialize(data);
