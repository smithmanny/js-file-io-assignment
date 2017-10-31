'use strict';

const util = require('util');
const path = require('path');
const { Employee } = require('./Employee');

const employee = new Promise((resolve, reject) => {
  if (resolve) {
    resolve(
      Employee.parseFromFilePath(path.resolve(__dirname, 'employee.json'))
    );
  } else {
    reject("You didn't get the promotion");
  }
});

// Refactored using promises
employee.then(
  val => {
    console.log(`is Employee? ${val instanceof Employee}`);
    console.log(`parsed: ${util.inspect(val)}`);
    // Promote Employee
    val.promote('Contractor', 10);
    console.log(`after promotion: ${util.inspect(val)}`);
  },
  err => {
    console.log(err);
  }
);

// const employee =
//   Employee
//     .parseFromFilePath(
//       path.resolve(__dirname, 'employee.json')
//     )

// console.log(`is Employee? ${employee instanceof Employee}`)
// console.log(`parsed: ${util.inspect(employee)}`)

// employee.promote('Contractor', 10)

// console.log(`after promotion: ${util.inspect(employee)}`)
