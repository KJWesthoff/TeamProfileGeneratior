const Employee = require('../lib/Employee');


test('ccreate and test an emplyee instance', () =>{
    const employee = new Employee('Steve' , 1, 'steve@npm.com');

    // test name and that employee number is a number
    expect(employee.name).toBe('Steve');
    expect(employee.id).toEqual(expect.any(Number));

    // test that email format is correct
    expect(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employee.email)).toBeTruthy();

    // test getter functions
    expect(employee.getName()).toBe("Steve");
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('steve@npm.com');
    // test that the default Employee is returned as role
    expect(employee.getRole()).toBe("Employee");    


});



