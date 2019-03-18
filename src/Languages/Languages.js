import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';


const GET_LANGUAGES = gql`
  {
    languages {
      name
      code
      native
    }
  }
`;

function Languages(props) {

  return (
    <QueryList
      query={GET_LANGUAGES}
      entity="languages"
      renderItem={language => (
        <ListItem key={language.code}>
          <Avatar>
            {language.code}
          </Avatar>
          <ListItemText primary={language.name} secondary={language.native}/>
        </ListItem>
      )}
    />
  );
}


export default Languages;
