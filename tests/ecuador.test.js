const ecuadorianIdentifierValidator = require('../src/countries/ecuador');
const identityNumberValidator = require('../src/index');

describe('Tests for ecuadorian identifier validator', () => {
  test('Should return true on valid ecuadorian identity numbers', () => {
    // Guayas
    expect(ecuadorianIdentifierValidator('0922553508')).toBeTruthy();
    // Pichincha
    expect(ecuadorianIdentifierValidator('1706172648')).toBeTruthy();
    // Manabí
    expect(ecuadorianIdentifierValidator('1312836420')).toBeTruthy();
    // Azuay
    expect(ecuadorianIdentifierValidator('0100967652')).toBeTruthy();
  });
  test('Should return false on invalid ecuadorian identity numbers', () => {
    expect(ecuadorianIdentifierValidator('0922553502')).toBeFalsy();
    expect(ecuadorianIdentifierValidator('1706172642')).toBeFalsy();
    expect(ecuadorianIdentifierValidator('1312836421')).toBeFalsy();
  });
});

describe('Integration test for ecuadorian identifier validator', () => {
  test('Should return true on valid ecuadorian identity number', () => {
    expect(identityNumberValidator('0922553508', 'EC')).toBeTruthy();
  });
  test('Should return false on valid ecuadorian identity number', () => {
    expect(identityNumberValidator('0922553502', 'EC')).toBeFalsy();
  });
});
