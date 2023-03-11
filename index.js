// Write your solution in this file!
const employee = {
  name: 'John Doe',
  age: 30,
  department: 'Sales',
  salary: 50000
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object to hold the updated employee data
  const updatedEmployee = { ...employee };
  // Update the employee data with the new key value pair
  updatedEmployee[key] = value;
  // Return the updated employee data
  return updatedEmployee;
}

describe('employees', function() {
  let employee;

  beforeEach(function() {
    employee = { name: 'John', age: 30, salary: 5000 };
  });

  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function() {
    it('returns an employee with the original key value pairs and the new key value pair', function() {
      // Test code using the "employee" variable
    });
  });
});

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const employeeClone = { ...employee };
  delete employeeClone[key];
  return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}