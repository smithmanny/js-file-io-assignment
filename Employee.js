'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this._name = name
    this._title = title
    this._salary = salary
  }

  static parseFromFilePath (path) {
    let src = fs.readFileSync(path).toString()
    let obj = JSON.parse(src)

    return new Employee(obj.name, obj.title, obj.salary)
  }

  promote (title, salary) {
    this._title = title
    this._salary = salary
  }
}

module.exports = {
  Employee
}
