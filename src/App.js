import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import AboutActivityForm from './components/AboutActivityForm';

class App extends Component {
  render() {
    const aboutActivityFormId = 'about-activity-form-id';
    return (
      <main>
        <Header />
        <MainSection>
          <h1>About your activity</h1>
          <AboutActivityForm id={aboutActivityFormId} />
        </MainSection>
        <Footer>
          <button className="button secondary-action">Back</button>
          <button form={aboutActivityFormId} className="button main-action">Next</button>
        </Footer>
      </main>
    );
  }
}

export default App;
