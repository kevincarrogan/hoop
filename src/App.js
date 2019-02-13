import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import AboutActivityForm from './components/AboutActivityForm';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MainSection>
          <h1>About your activity</h1>
          <AboutActivityForm />
        </MainSection>
        <Footer>
          <button className="button secondary-action">Back</button>
          <button className="button main-action">Next</button>
        </Footer>
      </main>
    );
  }
}

export default App;
