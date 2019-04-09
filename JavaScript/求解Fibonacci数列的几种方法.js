// 记忆优化函数可以带来巨大的性能提升（或者说简单的递归会带来巨大的性能问题）。
// 递归、递归的记忆优化方法、递归与循环

// 一般递归下输出斐波那契数列
console.time('test');

var fibonacci = function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i = 0; i <= 50; i += 1) {
    console.log("//" + i + ":" + fibonacci(i));
    
}

// 停止计时，输出时间   543163.775ms左右
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

for (var i = 0; i <= 50; i += 1) {
    console.log("//" + i + ":" + fibonacci2(i)); 
}

// 停止计时，输出时间  13.649ms左右
console.timeEnd('test2');

// 采用循环
console.time('test3');
function fibonacci3(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    let ac1 = 1;
    let ac2 = 1;
    for (let i = 2; i <= n; i++) {
        [ac1, ac2] = [ac2, ac1 + ac2];
    }
    return ac2;
}

for (var i = 0; i <= 50; i += 1) {
    console.log("//" + i + ":" + fibonacci3(i)); 
}
// 循环与采用记忆优化函数所花费时间大致相等
console.timeEnd('test3');


