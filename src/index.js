const ecuadorianIdentityValidator = require('./countries/ecuador');

const identityNumberValidator = function (identityNumber, country) {
  const upperCaseCountry = country.toUpperCase();
  if (upperCaseCountry === 'EC') {
    return ecuadorianIdentityValidator(identityNumber);
  } else {
    throw Error('Invalid country code');
  }
};

module.exports = identityNumberValidator;
