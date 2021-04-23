import React from 'react';
import PropTypes from 'prop-types';
import Tchat from './components/Tchat/Tchat';
import store, { initialState } from './reducers/store';
import Auth from './components/Auth/Auth';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import UsersRouted from './components/UsersRouted/UsersRouted';
import UserRouted from './components/UserRouted/UserRouted';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connectedUser: initialState.connectedUser };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ connectedUser: store.getState().connectedUser })
    });
  }
  render() {
    console.log('render APP', this.state)
    return (
      <div className="App">
        <Router>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant="h6">Mon app</Typography>
              <Button variant="contained" color="default">
                <Link to="/users">Users</Link>
              </Button>
              <Button variant="contained" color="secondary">
                <Link to="/users/1">Users/1</Link>
              </Button><Button variant="contained" color="secondary">
                <Link to="/users/2">Users/2</Link>
              </Button><Button variant="contained" color="secondary">
                <Link to="/users/3">Users/3</Link>
              </Button>
              <Button variant="contained" color="default">
                <Link to="/tchat">tchat</Link>
              </Button>
            </Toolbar>
          </AppBar>
          <div style={{ margin: '150px' }}>
            <Switch>
              <Route path="/" exact>
                <div >Hello and welcome to this wonderfull social chat</div>
              </Route>
              <Route path="/users/:userId">
                <UserRouted />
              </Route>
              <Route path="/users">
                <UsersRouted />
              </Route>
              <Route path="/tchat" >
                {null !== this.state.connectedUser ? <Tchat /> : <Auth />}
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
