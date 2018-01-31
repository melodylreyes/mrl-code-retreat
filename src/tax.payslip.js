'use strict';

class payslip {

    constructor(employee, payPeriod) {

        this._employee = employee;
        this._payPeriod = payPeriod;
    };

    getPayslipPersonName() {
        return this._employee.firstName + ' ' + this._employee.lastName;
    }

    generatePayslip(periodName, annualSalary, superRate, taxcalculator) {
        return {
            name :this.getPayslipPersonName(),
            payPeriod :periodName,
            grossIncome :taxcalculator.grossIncome(annualSalary),
            incomeTax :taxcalculator.incomeTax(annualSalary),
            netIncome :taxcalculator.nettIncome(annualSalary),
            super :taxcalculator.super(annualSalary, superRate)
        }
    };
}

module.exports = {
    payslip: payslip
}