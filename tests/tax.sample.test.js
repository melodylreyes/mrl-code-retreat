jest.unmock('tax.table');

test('Tax Table - Get Tax Band for a salary of $5000pa', () => {
    const taxTable = require('tax.table');

    let table = new taxTable.table();

    let expectedBand = {
        floor: 0,
        ceiling: 18199,
        baseTaxValue: 0,
        taxPercentage: 0
    };

    expect(table.getTaxBandByAnnualSalary(5000)).toEqual(expectedBand);
});

test('Tax Table - Get Tax Band for a salary of $25000pa', () => {
    const taxTable = require('tax.table');

    let table = new taxTable.table();

    let expectedBand = {
        };

    expect(table.getTaxBandByAnnualSalary(25000)).toEqual(expectedBand);
});

test('Tax Table - Get Tax Band for a salary of $50000pa', () => {
    const taxTable = require('tax.table');

    let table = new taxTable.table();

    let expectedBand = {
    };

    expect(table.getTaxBandByAnnualSalary(50000)).toEqual('6452.81');
});

test('Tax Table - Get Tax Band for a salary of $150000pa', () => {
    const taxTable = require('tax.table');

    let table = new taxTable.table();

    let expectedBand = {
        floor: 80001,
        ceiling: 260000,
        baseTaxValue: 17547,
        taxPercentage: 37
    };

    expect(table.getTaxBandByAnnualSalary(150000)).toEqual(37);
});

test('Tax Table - Get Tax Band for a salary of $250000pa', () => {
    const taxTable = require('tax.table');

    let table = new taxTable.table();

    let expectedBand = {
        floor: 180001,
        ceiling: 249999,
        baseTaxValue: 54547,
        taxPercentage: 45
    };

    expect(table.getTaxBandByAnnualSalary(250000)).toEqual(45);
});