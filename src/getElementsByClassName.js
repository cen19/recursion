// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodes = [];
  // create an inner function
  var searchNodes = function(node) {
    // one line of pseudo code should map to one line of real code
    // compare node's classname with className
    var parts = node.className.split(' ');
    if (parts.indexOf(className) >= 0) {

      // if matched, save node
      nodes.push(node);
    }

    // iterate over children
    for (var i = 0; i < node.children.length; i++) {
      // for each child, invoke searchNodes
      searchNodes(node.children[i]);
    }
  };
  searchNodes(document.body);

  return nodes;
};

// function that traverses that HTML that finds all the elemnts in it that has the class name

// learn to think of the HTML as a tree
// when we encounter a tree like stucture, it makes sense to use recursion


