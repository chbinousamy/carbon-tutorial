import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import GithubPage from './content/GithubPage';
import GitlabPage from './content/GitlabPage';
import HomebrewPage from './content/HomebrewPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/repos" component={RepoPage} />
              <Route path="/github" component={GithubPage} />
              <Route path="/gitlab" component={GitlabPage} />
              <Route path="/homebrew" component={HomebrewPage} />
            </Switch>
          </Content>
        </Theme>
      </>
    );
  }
}

export default App;
