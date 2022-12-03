const Employee = require('../lib/Employee');

describe('Employee', () => {
    //Test - gets name - expect to be a string
    it('getName() returns a string', () => {
        const employee = new Employee('name', 1, 'email');
        expect(typeof employee.getName()).toBe('string');
    });
    //Test - gets ID expect to be a number
    it('getID() returns a number', () => {
        const employee = new Employee('name', 1, 'email');
        expect(typeof employee.getID()).toBe('number');
    });
    //Test - gets email - expect to be a string
    it('getEmail() returns a string', () => {
        const employee = new Employee('name', 1, 'email');
        expect(typeof employee.getEmail()).toBe('string');
    });
    //Test - gets role returns employee - expect to be employee
    it('getRole() returns "Employee"', () => {
        const employee = new Employee('name', 1, 'email');
        expect(employee.getRole()).toBe('Employee');
    });
});