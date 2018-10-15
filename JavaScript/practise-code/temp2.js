

// 一般方法下输出费内巴切数
console.time('test');

var fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i = 0; i <= 10; i += 1) {
    console.log("//" + i + ":" + fibonacci(i));
    
}

// 停止计时，输出时间  7ms左右
console.timeEnd('test');


// 采用记忆优化函数
console.time('test2');

var fibonacci2 = function() {
    var memo = [0, 1];
    var fib = function(n) {
        var result = memo[n];
        if(typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

for (var i = 0; i <= 10; i += 1) {
    console.log("//" + i + ":" + fibonacci2(i)); 
}

// 停止计时，输出时间  2ms左右
console.timeEnd('test2');