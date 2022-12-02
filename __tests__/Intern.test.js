const Intern = require('./lib/Intern');

//Test - creates intern object with name, id, email, and school properties
describe('Intern', () => {
    it('should create an intern object with name, id, email, and school properties', () => {
        const intern = new Intern('name', 1, 'email', "school");

        expect(typeof intern.school).toBe('string');

    });
});

//Test - gets school name - expect a string
test('getSchool', () => {
    const intern = new Intern('name', 1, 'email', "school");
    expect(typeof intern.school).toBe('string');
});

//Test - gets role - overrides to return intern - expect to be intern
test('getRole', () => {
    const intern = new Intern('name', 1, 'email', "school");
    const role = jest.fn(intern => intern.role);

    role(intern);
    expect(role).toHaveReturnedWith('Intern');
});