const Manager = require('../lib/Manager');


test("Test the manager", () => {
    manager = new Manager("Tom", 99, "tom@npm.com", 101);

    expect(manager.getRole()).toBe("Manager")
    expect(manager.getOfficeNo()).toEqual(expect.any(Number));
    
});