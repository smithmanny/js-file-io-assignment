'use strict'

const util = require('util')
const path = require('path')
const { Employee } = require('./Employee')

const employee =
  Employee
    .parseFromFilePath(
      path.resolve(__dirname, 'employee.json')
    )

console.log(`is Employee? ${employee instanceof Employee}`)
console.log(`parsed: ${util.inspect(employee)}`)

employee.promote('Contractor', 10)

console.log(`after promotion: ${util.inspect(employee)}`)
