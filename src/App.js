import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import ActivityForm from './components/ActivityForm';

class App extends Component {
  render() {
    const activityFormId = 'activity-form';
    return (
      <main>
        <Header />
        <MainSection>
          <ActivityForm id={activityFormId} />
        </MainSection>
        <Footer>
          <button className="button secondary-action">Back</button>
          <button form={activityFormId} className="button main-action">Next</button>
        </Footer>
      </main>
    );
  }
}

export default App;
