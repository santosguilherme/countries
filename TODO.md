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
https://www.apollographql.com/docs/react

## Features
- [x] List of continents (code and name)
- [x] List of countries (code, name and native)
- [x] Show country details
- [x] List languages (code, name, native and rlt)
- [x] Show continent details
- [x] Show language details
- [ ] Tab synchronized with current route (sub routes)
- [ ] Toolbar with right route name
- [ ] Extract routes
- [ ] Prettier/airbnb
- [ ] Reuse components
- [ ] Back button?
- [ ] Collapsed panel in Entity details pages
- [ ] Filter/sort continents list
- [ ] Filter/sort countries list

## Technical features
- React Hooks
- React Lazy
- React Context API
- Tests with React testing library
- Animations with [popmotion](https://github.com/popmotion/popmotion)
- [Facebook i18n library](https://facebookincubator.github.io/fbt/)
- React Router?
- [Ant Design](https://github.com/ant-design/ant-design)
- [material-ui](https://github.com/mui-org/material-ui)
- [react-a11y](https://github.com/reactjs/react-a11y)
- [react-virtualized](https://github.com/bvaughn/react-virtualized)

