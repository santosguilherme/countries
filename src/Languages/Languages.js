import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';
import QueryListItem from '../commons/components/QueryList/QueryListItem';


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
  const primaryText = language => language.rtl
    ? `${language.name} - (RTL)`
    : language.name;

  return (
    <QueryList
      query={GET_LANGUAGES}
      entity="languages"
      renderItem={language => (
        <QueryListItem
          key={language.code}
          entity={language}
          avatar={language.code}
          primaryText={primaryText(language)}
          secondaryText={language.native}
        />
      )}
    />
  );
}


export default Languages;
