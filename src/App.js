import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import ActivityFormStepDataSource from './containers/ActivityFormStepDataSource';
import ActivityForm from './components/ActivityForm';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MainSection>
          <ActivityFormStepDataSource>{
            ({formId, currentStep, nextStep}) => (
              <ActivityForm
                id={formId}
                currentStep={currentStep}
                nextStep={nextStep}
              />
            )
          }</ActivityFormStepDataSource>
        </MainSection>
        <Footer />
      </main>
    );
  }
}

export default App;
