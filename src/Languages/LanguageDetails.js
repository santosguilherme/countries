import React from 'react';
import styled from 'styled-components';

import Loading from '../commons/components/Loading/Loading';
import Error from '../commons/components/Error/Error';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormatTextdirectionLToRIcon from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToLIcon from '@material-ui/icons/FormatTextdirectionRToL';

import CountryListItem from '../Countries/CountryListItem';

const GET_LANGUAGE_DETAILS = gql`
  query Language($code: String!) {
    language(code: $code) {
      code
      name
      native
      rtl
    }
  }
`;

const Header = styled.div`
  padding: 1rem;
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

const Content = styled.div`
  padding: 1rem;
  
  div + div {
    margin-top: 1rem;
  }
`;

function LanguageDetails(props) {
  const {match} = props;
  const {code} = match.params;

  return (
    <Query query={GET_LANGUAGE_DETAILS} variables={{code}}>
      {({loading, error, data}) => {
        if (loading) {
          return <Loading/>;
        }

        if (error) {
          return <Error>{error.message}</Error>;
        }

        const {code, name, native, rtl } = data.language;

        console.log('data.language', data.language)

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
            <Content>
              <div>
                <Typography variant="caption">native</Typography>
                <Typography>{native}</Typography>
              </div>
              <div>
                <Typography variant="caption" component="p">RTL</Typography>
                {rtl
                  ? (<FormatTextdirectionRToLIcon />)
                  : (<FormatTextdirectionLToRIcon />)}
              </div>
            </Content>
          </>
        );
      }}
    </Query>
  );
}

export default LanguageDetails;
