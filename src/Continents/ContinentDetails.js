import React from 'react';
import styled from 'styled-components';

import Loading from '../commons/components/Loading/Loading';
import Error from '../commons/components/Error/Error';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';

import CountryListItem from '../Countries/CountryListItem';

const GET_CONTINENT_DETAILS = gql`
  query Continent($code: String!) {
    continent(code: $code) {
      name
      code
      countries {
        code
        name
        emoji
        native
      }
    }
  }
`;

const Header = styled.div`
  padding: 1em 1em 0.75em;
`;

const ContinentTitleContent = styled.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 2em;
  
  ${ContinentTitle} {
    flex: 1;
  }
`;

const ContinentTitle = styled.div`
  margin-left: 1em;
`;

function ContinentDetails(props) {
  const {match} = props;
  const {code} = match.params;

  return (
    <Query query={GET_CONTINENT_DETAILS} variables={{code}}>
      {({loading, error, data}) => {
        if (loading) {
          return <Loading/>;
        }

        if (error) {
          return <Error>{error.message}</Error>;
        }

        const {name, code, countries} = data.continent;

        return (
          <div>
            <Header>
              <ContinentTitleContent>
                <Avatar>
                  {code}
                </Avatar>
                <ContinentTitle>
                  <Typography variant="caption">Continente</Typography>
                  <Typography variant="h6" component="h2" gutterBottom>{name}</Typography>
                </ContinentTitle>
              </ContinentTitleContent>

              <Typography variant="subtitle2">Países ({countries.length})</Typography>
            </Header>

            <Divider variant="middle"/>

            <List dense>
              {countries.map(country => (
                <CountryListItem key={country.code} country={country}/>
              ))}
            </List>
          </div>
        );
      }}
    </Query>
  );
}

export default ContinentDetails;
