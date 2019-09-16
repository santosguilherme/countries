import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';
import QueryListItem from '../commons/components/QueryList/QueryListItem';
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

function Languages(props) {
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
