jest.unmock('tax.payroll.calculator');
jest.unmock('tax.table');

test('Calculate Tax - Gross Income ($60050pa)', () => {

    const payrollCalculator = require('tax.payroll.calculator');
    const taxTable = require('tax.table');

    let table = new taxTable.table()
    let calculator = new payrollCalculator.payrollCalculator(table);

    expect(calculator.grossIncome(60050)).toEqual( 5004 );

});

test('Calculate Tax - Income Tax ($60050pa)', () => {

    const payrollCalculator = require('tax.payroll.calculator');
    const taxTable = require('tax.table');

    let table = new taxTable.table()
    let calculator = new payrollCalculator.payrollCalculator(table);

    expect(calculator.incomeTax(60050)).toEqual(922);

});

test('Calculate Tax - Nett Income ($60050pa)', () => {

    const payrollCalculator = require('tax.payroll.calculator');
    const taxTable = require('tax.table');

    let table = new taxTable.table()
    let calculator = new payrollCalculator.payrollCalculator(table);

    expect(calculator.nettIncome(60050)).toEqual( 4082);

});

test('Calculate Tax - Super ($60050pa, 9%)', () => {

    const payrollCalculator = require('tax.payroll.calculator');
    const taxTable = require('tax.table');

    let table = new taxTable.table()
    let calculator = new payrollCalculator.payrollCalculator(table);

    expect(calculator.super(60050, 9)).toBe( 450 );
});