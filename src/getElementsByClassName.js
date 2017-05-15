// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {

  var nodes = [];
  node = node || document.body;

  var parts = node.className.split(' ');
  if (parts.indexOf(className) >= 0) {

    // if matched, save node
    nodes.push(node);
  }
  // iterate over children
  for (var i = 0; i < node.children.length; i++) {
    // for each child, invoke searchNodes
    var childResults = getElementsByClassName(className, node.children[i]);
    nodes = nodes.concat(childResults);
  }
  return nodes;
};

// function that traverses that HTML that finds all the elemnts in it that has the class name

// learn to think of the HTML as a tree
// when we encounter a tree like stucture, it makes sense to use recursion


