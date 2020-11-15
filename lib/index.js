"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ecuador = require("./countries/ecuador");

var _default = function _default(identityNumber, country) {
  if (typeof country !== 'string') {
    throw Error('Country code must be a string');
  }

  var upperCaseCountry = country.toUpperCase();

  switch (upperCaseCountry) {
    case 'EC':
      return (0, _ecuador.ecuadorianIdentifierValidator)(identityNumber);

    default:
      throw Error('Invalid country code');
  }
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJpZGVudGl0eU51bWJlciIsImNvdW50cnkiLCJFcnJvciIsInVwcGVyQ2FzZUNvdW50cnkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztlQUVlLGtCQUFDQSxjQUFELEVBQXlCQyxPQUF6QixFQUE2QztBQUMxRCxNQUFJLE9BQU9BLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0IsVUFBTUMsS0FBSyxDQUFDLCtCQUFELENBQVg7QUFDRDs7QUFDRCxNQUFNQyxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDRyxXQUFSLEVBQXpCOztBQUNBLFVBQVFELGdCQUFSO0FBQ0UsU0FBSyxJQUFMO0FBQ0UsYUFBTyw0Q0FBOEJILGNBQTlCLENBQVA7O0FBQ0Y7QUFDRSxZQUFNRSxLQUFLLENBQUMsc0JBQUQsQ0FBWDtBQUpKO0FBTUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVjdWFkb3JpYW5JZGVudGlmaWVyVmFsaWRhdG9yIH0gZnJvbSAnLi9jb3VudHJpZXMvZWN1YWRvcidcblxuZXhwb3J0IGRlZmF1bHQgKGlkZW50aXR5TnVtYmVyOiBzdHJpbmcsIGNvdW50cnk6IHN0cmluZykgPT4ge1xuICBpZiAodHlwZW9mIGNvdW50cnkgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgRXJyb3IoJ0NvdW50cnkgY29kZSBtdXN0IGJlIGEgc3RyaW5nJylcbiAgfVxuICBjb25zdCB1cHBlckNhc2VDb3VudHJ5ID0gY291bnRyeS50b1VwcGVyQ2FzZSgpXG4gIHN3aXRjaCAodXBwZXJDYXNlQ291bnRyeSkge1xuICAgIGNhc2UgJ0VDJzpcbiAgICAgIHJldHVybiBlY3VhZG9yaWFuSWRlbnRpZmllclZhbGlkYXRvcihpZGVudGl0eU51bWJlcilcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY291bnRyeSBjb2RlJylcbiAgfVxufVxuIl19