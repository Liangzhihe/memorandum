var myObject = (function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
}());

console.log(myObject);

// wrong 
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            console.log("first",i);
        }
    }
}



// true
var add_the_handlers2 = function (nodes) {
    var helper = function (i) {
        return function (e) {
            console.log(e);
            console.log("second",i);
        }
    }
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = helper(i);
    }
}

var nodes = document.getElementsByClassName('list')[0].getElementsByTagName('li');
console.log("nodes",nodes);
add_the_handlers(nodes);
add_the_handlers2(nodes);
