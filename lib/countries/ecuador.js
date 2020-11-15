"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ecuadorianIdentifierValidator = void 0;

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ecuadorianIdentifierValidator = function ecuadorianIdentifierValidator(identifier) {
  if (typeof identifier !== 'string') {
    throw Error('Not a string');
  }

  if (identifier.length !== 10) {
    return false;
  }

  var identifierWithoutLastDigit = identifier.slice(0, -1);
  var verifierNumber = identifier.slice(-1);
  var evenDigits = [];
  var oddDigits = [];

  _toConsumableArray(identifierWithoutLastDigit).forEach(function (digit, index) {
    var parsedDigit = parseInt(digit);

    if ((index + 1) % 2 === 0) {
      evenDigits.push(parsedDigit);
    } else {
      var oddDigitMultipliedByTwo = parsedDigit * 2;

      if (oddDigitMultipliedByTwo > 9) {
        oddDigitMultipliedByTwo = oddDigitMultipliedByTwo - 9;
      }

      oddDigits.push(oddDigitMultipliedByTwo);
    }
  });

  var oddDigitsSum = oddDigits.reduce(_utils["default"].sumArray, 0);
  var evenDigitsSum = evenDigits.reduce(_utils["default"].sumArray, 0);
  var sumOfAllDigits = oddDigitsSum + evenDigitsSum;
  var calculatedVerifierNumber = sumOfAllDigits % 10;

  if (calculatedVerifierNumber !== 0) {
    calculatedVerifierNumber = 10 - calculatedVerifierNumber;
  }

  return calculatedVerifierNumber === parseInt(verifierNumber);
};

exports.ecuadorianIdentifierValidator = ecuadorianIdentifierValidator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3VudHJpZXMvZWN1YWRvci50cyJdLCJuYW1lcyI6WyJlY3VhZG9yaWFuSWRlbnRpZmllclZhbGlkYXRvciIsImlkZW50aWZpZXIiLCJFcnJvciIsImxlbmd0aCIsImlkZW50aWZpZXJXaXRob3V0TGFzdERpZ2l0Iiwic2xpY2UiLCJ2ZXJpZmllck51bWJlciIsImV2ZW5EaWdpdHMiLCJvZGREaWdpdHMiLCJmb3JFYWNoIiwiZGlnaXQiLCJpbmRleCIsInBhcnNlZERpZ2l0IiwicGFyc2VJbnQiLCJwdXNoIiwib2RkRGlnaXRNdWx0aXBsaWVkQnlUd28iLCJvZGREaWdpdHNTdW0iLCJyZWR1Y2UiLCJ1dGlscyIsInN1bUFycmF5IiwiZXZlbkRpZ2l0c1N1bSIsInN1bU9mQWxsRGlnaXRzIiwiY2FsY3VsYXRlZFZlcmlmaWVyTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQWdDLENBQUNDLFVBQUQsRUFBd0I7QUFDbkUsTUFBSSxPQUFPQSxVQUFQLEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2xDLFVBQU1DLEtBQUssQ0FBQyxjQUFELENBQVg7QUFDRDs7QUFDRCxNQUFJRCxVQUFVLENBQUNFLE1BQVgsS0FBc0IsRUFBMUIsRUFBOEI7QUFDNUIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsMEJBQTBCLEdBQUdILFVBQVUsQ0FBQ0ksS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFDLENBQXJCLENBQW5DO0FBQ0EsTUFBTUMsY0FBYyxHQUFHTCxVQUFVLENBQUNJLEtBQVgsQ0FBaUIsQ0FBQyxDQUFsQixDQUF2QjtBQUNBLE1BQU1FLFVBQW9CLEdBQUcsRUFBN0I7QUFDQSxNQUFNQyxTQUFtQixHQUFHLEVBQTVCOztBQUNBLHFCQUFJSiwwQkFBSixFQUFnQ0ssT0FBaEMsQ0FBd0MsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3hELFFBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDSCxLQUFELENBQTVCOztBQUNBLFFBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQVQsSUFBYyxDQUFkLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCSixNQUFBQSxVQUFVLENBQUNPLElBQVgsQ0FBZ0JGLFdBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUcsdUJBQXVCLEdBQUdILFdBQVcsR0FBRyxDQUE1Qzs7QUFDQSxVQUFJRyx1QkFBdUIsR0FBRyxDQUE5QixFQUFpQztBQUMvQkEsUUFBQUEsdUJBQXVCLEdBQUdBLHVCQUF1QixHQUFHLENBQXBEO0FBQ0Q7O0FBQ0RQLE1BQUFBLFNBQVMsQ0FBQ00sSUFBVixDQUFlQyx1QkFBZjtBQUNEO0FBQ0YsR0FYRDs7QUFZQSxNQUFNQyxZQUFZLEdBQUdSLFNBQVMsQ0FBQ1MsTUFBVixDQUFpQkMsa0JBQU1DLFFBQXZCLEVBQWlDLENBQWpDLENBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHYixVQUFVLENBQUNVLE1BQVgsQ0FBa0JDLGtCQUFNQyxRQUF4QixFQUFrQyxDQUFsQyxDQUF0QjtBQUNBLE1BQU1FLGNBQWMsR0FBR0wsWUFBWSxHQUFHSSxhQUF0QztBQUNBLE1BQUlFLHdCQUF3QixHQUFHRCxjQUFjLEdBQUcsRUFBaEQ7O0FBQ0EsTUFBSUMsd0JBQXdCLEtBQUssQ0FBakMsRUFBb0M7QUFDbENBLElBQUFBLHdCQUF3QixHQUFHLEtBQUtBLHdCQUFoQztBQUNEOztBQUNELFNBQU9BLHdCQUF3QixLQUFLVCxRQUFRLENBQUNQLGNBQUQsQ0FBNUM7QUFDRCxDQS9CTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGVjdWFkb3JpYW5JZGVudGlmaWVyVmFsaWRhdG9yID0gKGlkZW50aWZpZXI6IHN0cmluZykgPT4ge1xuICBpZiAodHlwZW9mIGlkZW50aWZpZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgRXJyb3IoJ05vdCBhIHN0cmluZycpXG4gIH1cbiAgaWYgKGlkZW50aWZpZXIubGVuZ3RoICE9PSAxMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGlkZW50aWZpZXJXaXRob3V0TGFzdERpZ2l0ID0gaWRlbnRpZmllci5zbGljZSgwLCAtMSlcbiAgY29uc3QgdmVyaWZpZXJOdW1iZXIgPSBpZGVudGlmaWVyLnNsaWNlKC0xKVxuICBjb25zdCBldmVuRGlnaXRzOiBudW1iZXJbXSA9IFtdXG4gIGNvbnN0IG9kZERpZ2l0czogbnVtYmVyW10gPSBbXTtcbiAgWy4uLmlkZW50aWZpZXJXaXRob3V0TGFzdERpZ2l0XS5mb3JFYWNoKChkaWdpdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJzZWREaWdpdCA9IHBhcnNlSW50KGRpZ2l0KVxuICAgIGlmICgoaW5kZXggKyAxKSAlIDIgPT09IDApIHtcbiAgICAgIGV2ZW5EaWdpdHMucHVzaChwYXJzZWREaWdpdClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG9kZERpZ2l0TXVsdGlwbGllZEJ5VHdvID0gcGFyc2VkRGlnaXQgKiAyXG4gICAgICBpZiAob2RkRGlnaXRNdWx0aXBsaWVkQnlUd28gPiA5KSB7XG4gICAgICAgIG9kZERpZ2l0TXVsdGlwbGllZEJ5VHdvID0gb2RkRGlnaXRNdWx0aXBsaWVkQnlUd28gLSA5XG4gICAgICB9XG4gICAgICBvZGREaWdpdHMucHVzaChvZGREaWdpdE11bHRpcGxpZWRCeVR3bylcbiAgICB9XG4gIH0pXG4gIGNvbnN0IG9kZERpZ2l0c1N1bSA9IG9kZERpZ2l0cy5yZWR1Y2UodXRpbHMuc3VtQXJyYXksIDApXG4gIGNvbnN0IGV2ZW5EaWdpdHNTdW0gPSBldmVuRGlnaXRzLnJlZHVjZSh1dGlscy5zdW1BcnJheSwgMClcbiAgY29uc3Qgc3VtT2ZBbGxEaWdpdHMgPSBvZGREaWdpdHNTdW0gKyBldmVuRGlnaXRzU3VtXG4gIGxldCBjYWxjdWxhdGVkVmVyaWZpZXJOdW1iZXIgPSBzdW1PZkFsbERpZ2l0cyAlIDEwXG4gIGlmIChjYWxjdWxhdGVkVmVyaWZpZXJOdW1iZXIgIT09IDApIHtcbiAgICBjYWxjdWxhdGVkVmVyaWZpZXJOdW1iZXIgPSAxMCAtIGNhbGN1bGF0ZWRWZXJpZmllck51bWJlclxuICB9XG4gIHJldHVybiBjYWxjdWxhdGVkVmVyaWZpZXJOdW1iZXIgPT09IHBhcnNlSW50KHZlcmlmaWVyTnVtYmVyKVxufVxuIl19