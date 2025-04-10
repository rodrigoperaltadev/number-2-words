# number-2-words

Convert numbers into written words in English and Spanish 🇬🇧🇪🇸

> A tiny and fast TypeScript library to translate numbers into natural language.

---

## ✨ Features

- ✅ Supports **English** and **Spanish**
- ✅ Handles numbers from `0` up to `999,999,999,999`
- ✅ Supports **negative numbers**
- ✅ Strictly typed with **TypeScript**
- ✅ Tiny footprint, no dependencies

---

## 📦 Installation

```bash
npm install number-2-words
# or
yarn add number-2-words
```

---

## 🔧 Usage

```ts
import { toWords } from "number-2-words";
import { Locale } from "number-2-words/types";

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

## 🧱 Project Structure

- `src/` – core logic
- `locales/` – per-language converters
- `types.ts` – shared types
- `constants.ts` – numeric base constants

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

If you want to add a new language or extend features, feel free to open an issue or PR!

---

## 📄 License

MIT © 2025 – Rodrigo Peralta
