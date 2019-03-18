import React from 'react';
import PropTypes from 'prop-types';

import {Query} from 'react-apollo';

import List from '@material-ui/core/List';

import Error from '../Error/Error';
import Loading from '../Loading/Loading';

function QueryList(props) {
  const {query, entity, renderItem} = props;

  return (
    <Query query={query}>
      {({loading, error, data}) => {
        if (loading) {
          return <Loading/>;
        }

        if (error) {
          return <Error>{error.message}</Error>;
        }

        return (
          <List>
            {data[entity].map(renderItem)}
          </List>
        );
      }}
    </Query>
  );
}

QueryList.propTypes = {
  entity: PropTypes.string.isRequired,
  query: PropTypes.any.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default QueryList;
