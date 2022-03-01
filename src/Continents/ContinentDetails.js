import React from 'react';
import styled from 'styled-components';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Loading from '../commons/components/Loading/Loading';
import Error from '../commons/components/Error/Error';
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
  padding: 1em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  ${DetailsName} {
    flex: 1;
  }
`;

const DetailsName = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 1rem;
  }
`;

const StyledAvatar = styled(Avatar)`
  background-color: ${props => props.theme.palette.primary.main};
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
          <>
            <Header>
              <Details>
                <Typography variant="overline">Detalhes</Typography>
                <DetailsName>
                  <StyledAvatar>
                    {code}
                  </StyledAvatar>
                  <Typography variant="h5" component="h1">{name}</Typography>
                </DetailsName>
              </Details>
            </Header>
            <Divider variant="middle"/>
            <List
              subheader={
                <ListSubheader component="div" disableSticky>
                  Países ({countries.length})
                </ListSubheader>
              }
              dense
            >
              {countries.map(country => (
                <CountryListItem key={country.code} country={country}/>
              ))}
            </List>
          </>
        );
      }}
    </Query>
  );
}

export default ContinentDetails;
