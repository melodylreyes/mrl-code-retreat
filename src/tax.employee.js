'use strict';

class employee {

    constructor(firstName, lastName, annualSalary, superRatePercentage, postalAddress) {

        this._firstName = firstName;
        this._lastName = lastName;
        this._annualSalary = annualSalary;
        this._superRatePercentage = superRatePercentage;
        this._postalAddress = postalAddress;
    };

    get firstName() {
        return this._firstName;
    }

    get annualSalary() {
        return this._annualSalary;
    }

    get postalAddress() {
        return this._postalAddress;
    }

    get superRatePercentage() {
        return this._superRatePercentage;
    }

}

module.exports = {
    employee: employee
}