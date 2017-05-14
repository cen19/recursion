var stringifyJSON = function(obj) {
  if (obj === true) {
    return 'true';
  } else if (obj === null) {
    return 'null';
  } else if (obj === false) {
    return 'false';
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (Array.isArray(obj) && obj.length > 0) {
    return '[' + transformElementsToString(obj) + ']';
  }
};

function transformElementsToString(array) {
  var output = [];
  array.forEach(function (element) {
    if (typeof element === 'number') {
      output.push('"' + element + '"');
    } else if (typeof element === 'string') {
      output.push('"' + element.toString() + '"');
    }
  });
  return output.join(', ');
}