import React from 'react';

import {withRouter} from 'react-router-dom';

import gql from 'graphql-tag';

import QueryList from '../commons/components/QueryList/QueryList';
import QueryListItem from '../commons/components/QueryList/QueryListItem';


const GET_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

function Continents(props) {
  const handleContinentClick = continent => {
    props.history.push(`/continents/${continent.code}`);
  };

  return (
    <QueryList
      query={GET_CONTINENTS}
      entity="continents"
      renderItem={continent => (
        <QueryListItem
          key={continent.code}
          entity={continent}
          onClick={handleContinentClick}
          avatar={continent.code}
          primaryText={continent.name}
        />
      )}
    />
  );
}

export default withRouter(Continents);
