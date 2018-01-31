'use strict';

class payrollCalculator {

    constructor(taxTable) {
    };

    grossIncome(annualSalary) {
        return Math.round(annualSalary / 12) ;
    }

    incomeTax(annualSalary) {

        let taxBand = this._taxTable.getTaxBandByAnnualSalary(annualSalary)

        return (taxBand.baseTaxValue + ((annualSalary - taxBand.floor) * (taxBand.taxPercentage/100))) / 12
    }

    nettIncome(annualSalary) {

        let annualTax = this.incomeTax(annualSalary)
        return (annualSalary - annualTax) / 12;
    }

    super(annualSalary, superRate) {
        return this.grossIncome(annualSalary) * (superRate/100);
    }

}

module.exports = {
    payrollCalculator: payrollCalculator
}