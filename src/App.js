import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <img className="avatar" src="https://www.fillmurray.com/40/40" />
          <h1>Mr Boing's Trampoline Club</h1>
          <nav>
            <a href="#">Back to Your Activities</a>
          </nav>
        </header>
        <section>
          <h1>About your activity</h1>
          <form>
            <div>
              <label>Activity Name</label>
              <input type="text" name="activity_name" />
            </div>
            <div>
              <label>Recommended Age</label>
              <select>
                <option>2</option>
                <option>3</option>
              </select>
              <select>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <label>Activity Webpage</label>
              <p>Use a specific page if possible. Try to avoid homepage links.</p>
              <input type="text" name="activity_webpage" placeholder="e.g. example.com/actiivty" />
            </div>
            <div>
              <label>Activity Phone Number</label>
              <span>Optional</span>
              <input type="text" name="activity_phone_number" />
            </div>
          </form>
        </section>
        <footer>
          <button>Back</button>
          <button>Next</button>
        </footer>
      </>
    );
  }
}

export default App;
