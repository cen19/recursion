var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var results = [];
<<<<<<< HEAD
    // if (obj.length === 0) {
    //   return '[]';
    // }
    obj.forEach(function (element) {
      results.push(stringifyJSON(element));
    });
    return '[' + results.join(',') + ']';
  }
  if (typeof obj === 'object' && obj) {
    var objectResults = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      objectResults.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objectResults.join(',') + '}';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }

}
=======
    obj.forEach(function(element) {
      results.push(stringifyJSON(element));
    });
    return '[' + results.join(',') + ']';
  }
  if (obj && typeof obj === 'object') {
    var results = [];

    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return '{' + results.join(',') + '}';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};
>>>>>>> 163ea79b80b4c8076643f8e8d8be50e78c8ff294
