jest.unmock('tax.employee');

test('Employee - David Rudd - 60050 - 9%', () => {
    const taxEmployee = require('tax.employee');

    let employee = new taxEmployee.employee("David", "Rudd", 60050, 9);

    expect(employee.firstName).toEqual("David");
    expect(employee.lastName).toEqual("Rudd");
    expect(employee.annualSalary).toEqual(60050);
    expect(employee.superRatePercentage).toEqual(9);
});
