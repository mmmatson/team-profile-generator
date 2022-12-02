const Manager = require('./lib/Manager');

//Test - creates Manager object with name, id, email, and office number properties
describe('Manager', () => {
    it('should create a manager object with name, id, email, and office number properties', () => {
        const manager = new Manager('name', 1, 'email', "office number");

        expect(typeof manager.office).toBe('string');

    });
});

test('getOffice', () => {
    const manager = new Manager('name', 1, 'email', "office number");
    expect(typeof manager.office).toBe('string');
});

//Test - gets role - overrides to return manager - expect to be manager
test('getRole', () => {
    const manager = new Manager('name', 1, 'email', "office number");
    const role = jest.fn(manager => manager.role);

    role(manager);
    expect(role).toHaveReturnedWith('Manager');
});
