import React from 'react';
import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';
import CountryListItem from './CountryListItem';

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      emoji
    }
  }
`;

function Countries() {
  return (
    <QueryList
      query={GET_COUNTRIES}
      entity="countries"
      renderItem={country => (
        <CountryListItem key={country.code} country={country}/>
      )}
    />
  );
}

export default Countries;
