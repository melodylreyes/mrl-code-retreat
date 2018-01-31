jest.unmock('tax.payslip');

test('Person Name - Ryan Chen', () => {
    let employee = new taxEmployee.employee('David', 'Rudd', 60050, 9);

    let payslip = new taxPayslip.payslip(employee, "01 March – 31 March");

    expect(payslip.getPayslipPersonName()).toBe('Ryan Chen');
});

test('Payslip - David Rudd', () => {
    const taxPayslip = require('tax.payslip');
    let payslip = new taxPayslip.payslip(employee, "01 March – 31 March", taxcalculator);

    let payslipOutput = {
        name :'David Rudd',
        payPeriod :'01 March – 31 March',
        grossIncome :5004,
        incomeTax :922,
        netIncome :4082
    }

    expect(payslip.generatePayslip('01 March – 31 March', 60050, 9, taxcalculator)).toEqual(payslipOutput);
});
