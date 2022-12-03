const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    //Test - gets GitHub username - expect a string
    it('getGithub() returns a string', () => {
        const engineer = new Engineer('name', 1, 'email', "github");
        expect(typeof engineer.getGithub()).toBe('string');
    });
    //Test - gets role - overrides to return engineer - expect to be engineer
    it('getRole() returns "Engineer"', () => {
        const engineer = new Engineer('name', 1, 'email', "github");
        expect(engineer.getRole()).toBe('Engineer');
    });
});