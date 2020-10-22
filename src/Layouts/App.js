import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import StoreProvider from '../store/StoreProvider';
import Header from './Header';
import Filters from './Filters';
import Page from '../Layouts/Page';
import Map from './Map';
import Footer from './Footer';

import '../Styles/sass/App.sass';



const App = () => {
  
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
                <Map />
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


export default App;
