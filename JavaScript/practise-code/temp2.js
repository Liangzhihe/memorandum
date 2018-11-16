function isArray(value) {
    return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object Array]';
}

function isFunction(value) {
    return Object.isFunction ? Object.isFunction(value) : Object.prototype.toString.call(value) === '[object Function]';
}

console.fuck = function () {
    return "fuck";
}

var fuck = [2, 3, 5];

console.log(isArray(fuck));
console.log(isFunction(console.log));
console.log(isFunction(console.fuck));
console.log(console.fuck());
// console.log(console);

// 作用域安全的构造函数
function Person(name, age, job) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}