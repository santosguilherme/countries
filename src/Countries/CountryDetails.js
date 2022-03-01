import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Loading from '../commons/components/Loading/Loading';
import Error from '../commons/components/Error/Error';
import LanguageListItem from '../Languages/LanguageListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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

const Header = styled.div`
  padding: 1em;
`;

const DetailsName = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  ${DetailsName} {
    flex: 1;
  }
`;

const StyledAvatar = styled(Avatar)`
  background-color: ${props => props.theme.palette.primary.main};
`;

const DetailsRow = styled.div`
  padding: 0 1rem 1rem;
  display: flex;
  align-items: center;

  span + span, svg + span {
    margin-left: 1rem;
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

        const {name, native, currency, phone, emoji, languages} = data.country;

        return (
          <>
            <Header>
              <Details>
                <Typography variant="overline">Detalhes</Typography>
                <DetailsName>
                  <StyledAvatar>
                    {code}
                  </StyledAvatar>
                  <Typography variant="h5" component="h1">
                    {name}
                  </Typography>
                </DetailsName>
              </Details>
            </Header>
            <DetailsRow>
              <Typography variant="h4" component="span">
                {emoji}
              </Typography>
              <Typography variant="h6" component="span">
                {native}
              </Typography>
            </DetailsRow>
            <DetailsRow>
              <PhoneIcon color="primary" />
              <Typography variant="h6" component="span">
                {phone}
              </Typography>
            </DetailsRow>
            <DetailsRow>
              <AttachMoneyIcon color="primary" />
              <Typography variant="h6" component="span">
                {currency}
              </Typography>
            </DetailsRow>
            <Divider variant="middle"/>
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
          </>
        );
      }}
    </Query>
  );
}

export default CountryDetails;
