# countries

## Domain

```
Continent {
  code: String
  name: String
  countries: [Country]
}

Country {
  code: String
  name: String
  native: String
  phone: String
  continent: Continent
  currency: String
  languages: [Language]
  emoji: String
  emojiU: String
}

Language {
  code: String
  name: String
  native: String
  rtl: Int
}
```

## Queries

```
Query {
  continents: [Continent]
  continent(code: String): Continent
  countries: [Country]
  country(code: String): Country
  languages: [Language]
  language(code: String): Language
}
```

## GraphQL

### API
https://github.com/trevorblades/countries

### Client
TBD

## Features
- [ ] List of continents (code and name)
- [ ] List of countries (code, name and native)
- [ ] Show country details
- [ ] List languages (code, name and rlt)
- [ ] Show continent details
- [ ] Filter/sort continents list
- [ ] Filter/sort countries list

## Technical features
- React Hooks
- Tests with React testing library
- Animations with 
- Facebook i18n library
- React Router
- Material UI ? Antd? TDV
