# @easii/number-2-words

Convert numbers into written words in English and Spanish 🇬🇧🇪🇸

> A tiny and fast TypeScript/JavaScript library to translate numbers into natural language.

---

## ✨ Features

- ✅ Supports **English** and **Spanish**
- ✅ Handles numbers from `0` up to `999,999,999,999`
- ✅ Supports **negative numbers**
- ✅ Strictly typed with **TypeScript**
- ✅ Compatible with JavaScript (`require` / `import`)
- ✅ Tiny footprint, no dependencies

---

## 📦 Installation

```bash
npm install @easii/number-2-words
# or
yarn add @easii/number-2-words
```

---

## 🔧 Usage (TypeScript or modern ESM)

```ts
import { toWords, Locale } from "@easii/number-2-words";

toWords(123, Locale.ENGLISH);
// → "one hundred twenty-three"

toWords(123, Locale.SPANISH);
// → "ciento veintitrés"

toWords(-45, Locale.ENGLISH);
// → "minus forty-five"

toWords(-45, Locale.SPANISH);
// → "menos cuarenta y cinco"
```

---

## 📘 Using in JavaScript

### CommonJS (Node.js `require` style)

```js
const { toWords, Locale } = require("@easii/number-2-words");

console.log(toWords(1000, Locale.ENGLISH)); // one thousand
console.log(toWords(-21, Locale.SPANISH)); // menos veintiuno
```

### ESM (`"type": "module"` or `.mjs`)

```js
import { toWords, Locale } from "@easii/number-2-words";

console.log(toWords(42, Locale.ENGLISH)); // forty-two
```

---

## 🧪 Examples

| Number            | English                                                                                                                        | Spanish                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `0`               | `zero`                                                                                                                         | `cero`                                                                                                                             |
| `21`              | `twenty-one`                                                                                                                   | `veintiuno`                                                                                                                        |
| `123`             | `one hundred twenty-three`                                                                                                     | `ciento veintitrés`                                                                                                                |
| `1000`            | `one thousand`                                                                                                                 | `mil`                                                                                                                              |
| `1_000_000`       | `one million`                                                                                                                  | `un millón`                                                                                                                        |
| `-532`            | `minus five hundred thirty-two`                                                                                                | `menos quinientos treinta y dos`                                                                                                   |
| `999_999_999_999` | `nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine` | `novecientos noventa y nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve` |

---

## 🌐 Supported Locales

```ts
enum Locale {
  ENGLISH = "en",
  SPANISH = "es",
}
```

> More locales coming soon!

---

## ✅ Roadmap

- [x] English 🇬🇧
- [x] Spanish 🇪🇸
- [x] Negative numbers
- [ ] Decimal support
- [ ] Ordinals (`first`, `primero`)
- [ ] Currency formatting (`$123.45`)

---

## 🤝 Contributing

Feel free to fork the repository and submit pull requests.

---

## 📄 License

MIT © 2025 – Rodrigo Peralta / Easii
