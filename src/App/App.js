import React, {Component, Fragment} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import LanguageIcon from '@material-ui/icons/Language';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';

import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle';

import Continents from '../Continents/Continents';
import Countries from '../Countries/Countries';
import Languages from '../Languages/Languages';
import ContinentDetails from '../Continents/ContinentDetails';


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const BottomNavigationContent = styled.nav`
  position: relative;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

// https://material-ui.com/guides/composition/#caveat-with-refs
const RouterLink = React.forwardRef((props, ref) => <NavLink {...props} innerRef={ref} />);

class App extends Component {
  state = {
    currentTab: 'continents' // todo: based on active route
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
          <Router>
            <Fragment>
              <GlobalStyle/>
              <CssBaseline/>
              <Container>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" color="inherit">
                      Continentes {/*// todo: based on active route*/}
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Content>
                  <Paper elevation={2}>
                    <Switch>
                      <Route exact path="/continents" component={Continents}/>
                      <Route exact path="/continents/:code" component={ContinentDetails}/>
                      <Route exact path="/countries" component={Countries}/>
                      <Route exact path="/languages" component={Languages}/>
                      <Route
                        exact
                        path="/"
                        render={() => <Redirect to={{pathname: '/continents'}}/>}
                      />
                    </Switch>
                  </Paper>
                </Content>
                <BottomNavigationContent>
                  <BottomNavigation value={currentTab} onChange={this.handleChangeTab}>
                    <BottomNavigationAction
                      label="Continentes" value="continents" icon={<PublicIcon/>}
                      component={RouterLink} to="/continents"
                    />
                    <BottomNavigationAction
                      label="Países" value="countries" icon={<OutlinedFlagIcon/>}
                      component={RouterLink} to="/countries"
                    />
                    <BottomNavigationAction
                      label="Línguas" value="languages" icon={<LanguageIcon/>} component={RouterLink}
                      to="/languages"
                    />
                  </BottomNavigation>
                </BottomNavigationContent>
              </Container>
            </Fragment>
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default App;
