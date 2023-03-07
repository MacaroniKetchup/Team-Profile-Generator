const Employee = require('../lib/Employee')
// Test for create new employee
test('Should create new employee.', () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe('object');
})
// Test name input
test('Input name.', () => {
    const name = 'Cory';
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})
// Testing ID number input
test('Input ID.', () => {
    const idNo = 2
    const newEmployee = new Employee('Cory', idNo);
    expect(newEmployee.idNo).toBe(idNo);
})
// Test Email input
test('Input Email.', () => {
    const email = 'stylesthestyer@gmail.com';
    const newEmployee = new Employee ('Cory', 2, email);
    expect(newEmployee.email).toBe(email);
})