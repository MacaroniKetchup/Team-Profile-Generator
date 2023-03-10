const Manager = require('../lib/Manager');
// Testing office number input for Manager
test('gets to input office number.', () => {
    const officeNumTest = 2;
    const newEmployee = new Manager('Cory', 2, 'stylesthestyer@gmail.com', officeNumTest);
    expect(newEmployee.officeNum).toBe(officeNumTest);
});
// Testing if officeNumTest will return office number
test('officeNumTest to return office number', () => {
    const officeNumTest = 2;
    const newEmployee = new Manager('Cory', 2, 'stylesthestyer@gmail.com', officeNumTest);
    expect(newEmployee.getOfficeNum()).toBe(officeNumTest);
});
// Testing for the Manager Value
test('testing Manager role', () => {
    const valueReturn = 'Manager';
    const newEmployee = new Manager('Cory', 2, 'stylesthestyer@gmail.com', 2);
    expect(newEmployee.getRole()).toBe(valueReturn);
});
