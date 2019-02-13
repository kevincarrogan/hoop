import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MainSection>
          <h1>About your activity</h1>
          <form className="base-form">
            <div className="form-field">
              <label>Activity Name</label>
              <input type="text" name="activity_name" />
            </div>
            <div className="form-field">
              <label>Recommended Age</label>
              <select>
                <option>From</option>
                <option>2</option>
                <option>3</option>
              </select>
              <select>
                <option>To</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="form-field">
              <label>Activity Webpage</label>
              <p className="instructions">Use a specific page if possible. Try to avoid homepage links.</p>
              <input type="text" name="activity_webpage" placeholder="e.g. example.com/actiivty" />
            </div>
            <div className="form-field">
              <div className="label-wrapper">
                <label>Activity Phone Number</label>
                <span className="optional">Optional</span>
              </div>
              <input type="text" name="activity_phone_number" />
            </div>
          </form>
        </MainSection>
        <footer>
          <button className="button secondary-action">Back</button>
          <button className="button main-action">Next</button>
        </footer>
      </main>
    );
  }
}

export default App;
