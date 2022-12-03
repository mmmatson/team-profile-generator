const Intern = require('../lib/Intern');

describe('Intern', () => {
    //Test - gets school name - expect a string
    it('getSchool() returns a string', () => {
        const intern = new Intern('name', 1, 'email', "school");
        expect(typeof intern.getSchool()).toBe('string');
    });
    //Test - gets role - overrides to return intern - expect to be intern
    it('getRole() returns "Intern"', () => {
        const intern = new Intern('name', 1, 'email', "school");
        expect(intern.getRole()).toBe('Intern');
    });
});