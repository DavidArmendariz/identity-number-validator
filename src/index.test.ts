import identityNumberValidator from '.';

describe('identityNumberValidator', () => {
  test('should throw error if country code is not a string', () => {
    expect(() => identityNumberValidator('0922553508', (123 as unknown) as string)).toThrowError(
      'Country code must be a string',
    );
  });
  test('should return true if we pass a valid ecuadorian identity number and a valid country code', () => {
    expect(identityNumberValidator('0922553508', 'EC')).toEqual(true);
  });
  test('should throw error if we pass an invalid country code', () => {
    expect(() => identityNumberValidator('0922553508', 'ASDF')).toThrowError('Invalid country code');
  });
});
