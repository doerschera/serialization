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
      for(var key in entry) {
        console.log(typeof entry[key]);
      }
    }
  })
}

serialize(data, 'HTML');
