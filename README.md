<a href="https://www.buymeacoffee.com/darmendarizp"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=darmendarizp&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

![badge](https://github.com/DavidArmendariz/identity-number-validator/workflows/Testing%20and%20deploying/badge.svg)

# Install

With `npm`:

```bash
npm install identity-number-validator
```

or with `yarn`:

```bash
yarn add identity-number-validator
```

## Usage

```javascript
import identityNumberValidator from "identity-number-validator"
// should return true as this is a valid identity number
console.log(identityNumberValidator("0922553508", "EC"))
// should return false as this is an invalid identity number
console.log(identityNumberValidator("123456789", "EC"))
```

## Country Codes supported

| Country | Code |
| ------- | ---- |
| Ecuador | EC   |
