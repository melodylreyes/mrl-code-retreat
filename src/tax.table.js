'use strict';

class table {

    constructor() {

        this._table = {
            bands: [
                {
                    floor: 0,
                    ceiling: 18200,``
                    baseTaxValue: 0,
                    taxPercentage: 0
                },
                {
                    floor: 37001,
                    ceiling: 80000,
                    baseTaxValue: 3572,
                    taxPercentage: 32.5
                },
                {
                    floor: 80001,
                    ceiling: 180000,
                    baseTaxValue: 17547,
                    taxPercentage: 37
                },
                {
                    floor: 180001,
                    ceiling: 249999,
                    baseTaxValue: 54547,
                    taxPercentage: 45
                },
            ]
        }
    };

    getTaxBandByAnnualSalary(annualSalary) {
        return this._table.bands.find(function (band) {
            return ((band.floor <= annualSalary) && (band.ceiling >= annualSalary));
        })
    }
}

module.exports = {
    table: table
}