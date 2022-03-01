import React from 'react';
import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';
import LanguageListItem from './LanguageListItem';

const GET_LANGUAGES = gql`
  {
    languages {
      name
      code
      native
      rtl
    }
  }
`;

function Languages() {
  return (
    <QueryList
      query={GET_LANGUAGES}
      entity="languages"
      renderItem={language => (
        <LanguageListItem
          key={language.code}
          language={language}
        />
      )}
    />
  );
}


export default Languages;
