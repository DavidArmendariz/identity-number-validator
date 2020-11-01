import { ecuadorianIdentifierValidator } from './countries/ecuador'

export default (identityNumber: string, country: string) => {
  if (typeof country !== 'string') {
    throw Error('Country code must be a string')
  }
  const upperCaseCountry = country.toUpperCase()
  switch (upperCaseCountry) {
    case 'EC':
      return ecuadorianIdentifierValidator(identityNumber)
    default:
      throw Error('Invalid country code')
  }
}
