var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var results = [];
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