import { ecuadorianIdentifierValidator } from './ecuador';

describe('ecuadorianIdentifierValidator', () => {
  test('should throw error if the argument passed is not a string', () => {
    expect(() => ecuadorianIdentifierValidator((123 as unknown) as string)).toThrowError('Not a string');
  });
  test('should return false if identity number does not have length 10', () => {
    expect(ecuadorianIdentifierValidator('123')).toEqual(false);
  });
  test('should return true on valid ecuadorian identity numbers', () => {
    // Guayas
    expect(ecuadorianIdentifierValidator('0922553508')).toEqual(true);
    // Pichincha
    expect(ecuadorianIdentifierValidator('1706172648')).toEqual(true);
    // Manabí
    expect(ecuadorianIdentifierValidator('1312836420')).toEqual(true);
    // Azuay
    expect(ecuadorianIdentifierValidator('0100967652')).toEqual(true);
  });
  test('should return false on invalid ecuadorian identity numbers', () => {
    expect(ecuadorianIdentifierValidator('0922553502')).toEqual(false);
    expect(ecuadorianIdentifierValidator('1706172642')).toEqual(false);
    expect(ecuadorianIdentifierValidator('1312836421')).toEqual(false);
  });
});
