const utils = require('../utils/index');

const ecuadorianIdentifierValidator = (identifier) => {
  if (typeof identifier !== 'string') {
    throw Error('Not a string');
  }
  if (identifier.length !== 10) {
    return false;
  }
  const identifierWithoutLastDigit = identifier.slice(0, -1);
  const verifierNumber = identifier.slice(-1);
  let evenDigits = [];
  let oddDigits = [];
  [...identifierWithoutLastDigit].forEach((digit, index) => {
    const parsedDigit = parseInt(digit);
    if ((index + 1) % 2 === 0) {
      evenDigits.push(parsedDigit);
    } else {
      let oddDigitMultipliedByTwo = parsedDigit * 2;
      if (oddDigitMultipliedByTwo > 9) {
        oddDigitMultipliedByTwo = oddDigitMultipliedByTwo - 9;
      }
      oddDigits.push(oddDigitMultipliedByTwo);
    }
  });
  oddDigits = oddDigits.reduce(utils.sumArray, 0);
  evenDigits = evenDigits.reduce(utils.sumArray, 0);
  const sumOfAllDigits = oddDigits + evenDigits;
  let calculatedVerifierNumber = sumOfAllDigits % 10;
  if (calculatedVerifierNumber !== 0) {
    calculatedVerifierNumber = 10 - calculatedVerifierNumber;
  }
  return calculatedVerifierNumber == verifierNumber;
};

module.exports = ecuadorianIdentifierValidator;
