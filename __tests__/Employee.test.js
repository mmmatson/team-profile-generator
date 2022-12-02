const Employee = require('./lib/Employee');

//Test - creates employee object with name, id, and email properties
describe('Employee', () => {
    it('should create an employee object with name, id, and email properties', () => {
        const employee = new Employee('name', 1, 'email');

        expect(typeof employee.name).toBe('string');
        expect(typeof employee.id).toBe('number');
        expect(typeof employee.email).toBe('string');

    });
});

//Test - gets name - expect to be a string
test('getName', () => {
    const employee = new Employee('name', 1, 'email');
    expect(typeof employee.name).toBe('string');
});

//Test - gets ID expect to be a number

test('getID', () => {
    const employee = new Employee('name', 1, 'email');
    expect(typeof employee.id).toBe('number');
});

//Test - gets email - expect to be a string

test('getEmail', () => {
    const employee = new Employee('name', 1, 'email');
    expect(typeof employee.email).toBe('string');
});

//Test - gets role returns employee - expect to be employee
test('getRole', () => {
    const employee = new Employee('name', 1, 'email');
    const role = jest.fn(employee => employee.role);

    role(employee);
    expect(role).toHaveReturnedWith('Employee');
});
