var data = require('./testData.js');


function serialize(data, outputFormat) {

  if(outputFormat === 'JSON') {
    return JSON.stringify(data);
  }

  data.forEach(function(entry) {
    if(Array.isArray(entry)) {
      entry.forEach(function(item) {
        return console.log(typeof item);
      })
    } else if(typeof entry === 'object'){
      console.log('Is object');
      itemIsObject(entry);
    }
  })

  function itemIsObject(item) {
    for(var key in item) {
      var childItem = item[key];
      console.log('  '+typeof childItem);
      if(typeof childItem === 'object') {
        console.log('me!');
        itemIsObject(childItem);
      }
    }
  }
}

serialize(data, 'HTML');
