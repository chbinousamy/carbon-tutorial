import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Routes, Route } from 'react-router-dom';
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
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/homebrew" element={<HomebrewPage />} />
              <Route path="/repos" element={<RepoPage />} />
              <Route path="/github" element={<GithubPage />} />
              <Route path="/gitlab" element={<GitlabPage />} />
            </Routes>
          </Content>
        </Theme>
      </>
    );
  }
}

export default App;
