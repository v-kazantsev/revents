import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from './components/Event/EventDashboard/EventDashboard';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/home';
import PeopleDashboard from './components/users/PeopleDashboard/PeopleDashboard';
import Settings from './components/users/Settings/SettingsDashboard';
import EventDetails from './components/Event/EventDetails/EventDetails';
import EventForm from './components/Event/EventForm/EventForm';
import ModalManager from './components/modals/ModalManager';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ModalManager />
        <Route exact path='/' component={Home} />
        <Route
          path='/(.+)'
          render= {() => (
            <div>
              <NavBar />
              <Container className='main'>
                <Switch>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/settings' component={Settings} />
                  <Route path='/event/:id' component={EventDetails} />
                  <Route path='/create' component={EventForm} />
                  <Route path='/manage/:id' component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
