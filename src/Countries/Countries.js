import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';


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

function Countries(props) {

  return (
    <QueryList
      query={GET_COUNTRIES}
      entity="countries"
      renderItem={country => (
        <ListItem key={country.code}>
          <Avatar>
            {country.code}
          </Avatar>
          <ListItemText primary={`${country.name} - ${country.emoji}`} secondary={country.native}/>
        </ListItem>
      )}
    />
  );
}

export default Countries;
