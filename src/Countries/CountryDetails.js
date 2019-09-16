import React from 'react';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Loading from '../commons/components/Loading/Loading';
import Error from '../commons/components/Error/Error';

import LanguageListItem from '../Languages/LanguageListItem';

const GET_COUNTRY_DETAILS = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      native
      phone
      continent {
        name
        code
      }
      currency
      languages  {
        name
        code
        native
        rtl
      }
      emoji
    }
  }
`;

function CountryDetails(props) {
  const {match} = props;
  const {code} = match.params;

  return (
    <Query query={GET_COUNTRY_DETAILS} variables={{code}}>
      {({loading, error, data}) => {
        if (loading) {
          return <Loading/>;
        }

        if (error) {
          return <Error>{error.message}</Error>;
        }

        const {name, languages} = data.country;

        return (
          <div>
            {name}
            <List
              subheader={
                <ListSubheader component="div" disableSticky>Linguas</ListSubheader>
              }
              dense
            >
              {languages.map(language => (
                <LanguageListItem
                  key={language.code}
                  language={language}
                />
              ))}
            </List>
          </div>
        );
      }}
    </Query>
  );
}

export default CountryDetails;
