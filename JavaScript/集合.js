'use strict'

// 集合
function Set() {
  const items = {}

  this.has = value => items.hasOwnProperty(value)

  this.add = value => {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }

  this.remove = value => {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  this.clear = () => {
    items = {}
  }

  this.size = () => {
    return Object.keys(items).length
  }

  this.values = () => {
    return Object.keys(items)
  }
}

const set = new Set()
set.add(1)
console.log(set.values()) //输出["1"]
console.log(set.has(1)) //输出true
console.log(set.size()) //输出1
set.add(2)
console.log(set.values()) //输出["1", "2"]
console.log(set.has(2)) //true
console.log(set.size()) //2
set.remove(1)
console.log(set.values()) //输出["2"]
set.remove(2)
console.log(set.values()) //输出[]
