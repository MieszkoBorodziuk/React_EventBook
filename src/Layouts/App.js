import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/sass/App.sass';
import Header from './Header';
import Filters from './Filters';
import EventList from './EventList';
import Footer from './Footer';
import SimpleMap from './Map'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <div>
            <Filters />
          </div>
          <main>
            <div className="main-eventlist">
              <EventList />
            </div>
            <div className="main-map">
              <SimpleMap />
            </div>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>

    );
  }
}

export default App;
