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
