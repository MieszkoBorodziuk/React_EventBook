import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import StoreProvider from '../store/StoreProvider';
import ApiKey from '../data/Key';
import Header from './Header';
import Filters from './Filters';
import Page from '../Layouts/Page';
import Map from './Map';
import Footer from './Footer';

import '../Styles/sass/App.sass';



class App extends Component {

  render() {
    return (
      <StoreProvider>
        <Router>
          <div className="app">
            <header>
              <Header />
            </header>
            <div className="filter-app">
              <Filters />
            </div>
            <main>
              <div className="main-eventlist">
                <Page />
              </div>
              <div className="main-map">
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${ApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </Router >
      </StoreProvider>

    );
  }
}

export default App;
