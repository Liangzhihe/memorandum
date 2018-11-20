function log() {
    console.log.apply(console, arguments);
}

// log(parseInt('08', 8));
// log(parseInt('09', 10));
// log(0.1 + 0.2);

// function createPerson(name,age) {
//     return {
//         name,
//         age
//     };
// }

// function createPerson(name) {
//     const age = 28;
//     return {
//         name,
//         age
//     };
// }


// const person1 = createPerson('julia', 28);

// log(person1);

// Object.assign(person1, {
//     job:'coder'
// })

// log(person1);

// let person = {
//     getGreeting() {
//         return 'Hellow';
//     }
// };

// let dog = {
//     getGreeting() {
//         return 'Woof';
//     }
// };

// let friend = {
//     getGreeting() {
//         // return Object.getPrototypeOf(this).getGreeting.call(this) + ' my friend';
//         return super.getGreeting() + ' my family';
//     }
// };

// Object.setPrototypeOf(friend, person);
// log(friend.getGreeting());
// log(Object.getPrototypeOf(friend) === person);

// Object.setPrototypeOf(friend, dog);
// log(friend.getGreeting());
// log(Object.getPrototypeOf(friend) === dog);

// let relative = Object.create(friend);
// log(relative.getGreeting());
// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//         start: {
//             line: 1,
//             column: 1
//         },
//         end: {
//             line: 1,
//             column: 4
//         }
//     }
// };

// let {loc:{end: localEnd}} = node;

// console.log(localEnd);

// function log() {
//     console.log.apply(console, arguments);
// }

// let colors = ["green", "blue", "red"];
// let [...localColors] = colors;
// log(localColors);
// log(colors);
// log(Object.is(localColors, colors));
// log(localColors == colors);

// const arr = [1,2,3,4,5,6,6,6,6];
// const set = new Set(arr);
// log(set);
// log(set.has(6));
// set.delete(6);
// log(set.has(6));
// set.clear();
// log(set.has(5));
// log(set.has(7));

// const arr2 = [...set];
// log(arr2);

// const arr3 = [...new Set(arr)];
// log(arr3);

// const arr4 = Array.from(new Set(arr));
// log(arr4);
let set = new Set([1, 2]);
let processor = {
    output(value) {
        log(value);
    },
    process(dataSet) {
        dataSet.forEach( value => this.output(value));
    }
};
processor.process(set);