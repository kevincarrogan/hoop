import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import AboutActivityForm from './components/AboutActivityForm';
import AddressActivityForm from './components/AddressActivityForm';

class App extends Component {
  render() {
    const aboutActivityFormId = 'about-activity-form-id';
    return (
      <main>
        <Header />
        <MainSection>
          <AddressActivityForm id={aboutActivityFormId} />
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
