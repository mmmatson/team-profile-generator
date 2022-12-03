const Manager = require('../lib/Manager');

describe('Manager', () => {
    //Test - get office - expect to be a string
    it('getOffice() returns a string', () => {
        const manager = new Manager('name', 1, 'email', "office number");
        expect(typeof manager.getOffice()).toBe('string');
    });
    //Test - gets role - overrides to return manager - expect to be manager
    it('getRole() returns "Manager"', () => {
        const manager = new Manager('name', 1, 'email', "office number");
        expect(manager.getRole()).toBe('Manager');
    });
});