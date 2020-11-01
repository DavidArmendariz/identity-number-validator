import utils from 'utils'

export const ecuadorianIdentifierValidator = (identifier: string) => {
  if (typeof identifier !== 'string') {
    throw Error('Not a string')
  }
  if (identifier.length !== 10) {
    return false
  }
  const identifierWithoutLastDigit = identifier.slice(0, -1)
  const verifierNumber = identifier.slice(-1)
  const evenDigits: number[] = []
  const oddDigits: number[] = [];
  [...identifierWithoutLastDigit].forEach((digit, index) => {
    const parsedDigit = parseInt(digit)
    if ((index + 1) % 2 === 0) {
      evenDigits.push(parsedDigit)
    } else {
      let oddDigitMultipliedByTwo = parsedDigit * 2
      if (oddDigitMultipliedByTwo > 9) {
        oddDigitMultipliedByTwo = oddDigitMultipliedByTwo - 9
      }
      oddDigits.push(oddDigitMultipliedByTwo)
    }
  })
  const oddDigitsSum = oddDigits.reduce(utils.sumArray, 0)
  const evenDigitsSum = evenDigits.reduce(utils.sumArray, 0)
  const sumOfAllDigits = oddDigitsSum + evenDigitsSum
  let calculatedVerifierNumber = sumOfAllDigits % 10
  if (calculatedVerifierNumber !== 0) {
    calculatedVerifierNumber = 10 - calculatedVerifierNumber
  }
  return calculatedVerifierNumber === parseInt(verifierNumber)
}
