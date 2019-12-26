'use strict'

// class Set {
//   constructor() {
//     this.items = {}
//   }

//   has = value => this.items.hasOwnProperty(value)

//   add = value => {
//     if (!this.has(value)) {
//       this.items[value] = value
//       return true
//     }
//     return false
//   }

//   remove = value => {
//     if (this.has(value)) {
//       delete this.items[value]
//     }
//   }

//   clear = () => this.items = {}

//   values = () => Object.keys(this.items)

//   size = () => this.values().length

// }

// 并集
const union = (...args) => {
  if (args.length === 0) {
    console.log('no params')
    return false
  } else if (args.length === 1) {
    return args[0]
  } else { // 参数大于1个
    const items = new Set()
    for (let i = 0; i < args.length; i++) {
      const item = args[i]
      // console.log(typeof item, item)
      item.forEach(el => {
        items.add(el)
      })
    }
    return items
  }
}

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
const setC = new Set()
setC.add(6)
setC.add(7)
setC.add(8)
setC.add(9)


const unionABC = union(setA, setB)
console.log(unionABC.values())