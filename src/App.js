import React, {Component, Fragment} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import LanguageIcon from '@material-ui/icons/Language';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo'

import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from './theme/GlobalStyle';


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`;

const BottomNavigationContent = styled.nav`
  position: relative;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

class App extends Component {
  state = {
    currentTab: 'continents'
  };

  handleChangeTab = (event, currentTab) => {
    this.setState(() => ({
      currentTab
    }));
  };

  render() {
    const {currentTab} = this.state;

    return (
      <ThemeProvider theme={{}}>
        <ApolloProvider client={client}>
          <Fragment>
            <GlobalStyle/>
            <CssBaseline/>
            <Container>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Continentes
                  </Typography>
                </Toolbar>
              </AppBar>
              <Content>
                <Paper>
                  <Query query={GET_COUNTRIES}>
                    {({loading, error, data}) => {
                      if (loading) return <p>Loading...</p>;
                      if (error) return <p>{error.message}</p>;
                      return (
                        <List>
                          {data.countries.map(country => (
                            <ListItem key={country.code}>
                              <Avatar>
                                {country.code}
                              </Avatar>
                              <ListItemText primary={country.name}/>
                            </ListItem>
                          ))}
                        </List>
                      );
                    }}
                  </Query>
                </Paper>
              </Content>
              <BottomNavigationContent>
                <BottomNavigation value={currentTab} onChange={this.handleChangeTab}>
                  <BottomNavigationAction label="Continentes" value="continents" icon={<PublicIcon/>}/>
                  <BottomNavigationAction label="Países" value="countries" icon={<OutlinedFlagIcon/>}/>
                  <BottomNavigationAction label="Línguas" value="languages" icon={<LanguageIcon/>}/>
                </BottomNavigation>
              </BottomNavigationContent>
            </Container>
          </Fragment>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default App;
