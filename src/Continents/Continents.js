import React from 'react';

import { withRouter } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import gql from 'graphql-tag';
import QueryList from '../commons/components/QueryList/QueryList';


const GET_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

function Continents(props) {

  return (
    <QueryList
      query={GET_CONTINENTS}
      entity="continents"
      renderItem={continent => (
        <ListItem key={continent.code} onClick={() => props.history.push(`/continents/${continent.code}`)} button>
          <Avatar>
            {continent.code}
          </Avatar>
          <ListItemText primary={continent.name}/>
        </ListItem>
      )}
    />
  );
}

export default withRouter(Continents);
