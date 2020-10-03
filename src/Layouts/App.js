import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import '../Styles/sass/App.sass';
import Header from './Header';
import Filters from './Filters';
import Footer from './Footer';
import Page from '../Layouts/Page';
import EventAPI from '../API/EventAPI';
import Map from './Map';
import ApiKey from '../data/Key';
import StoreProvider from '../store/StoreProvider';


class App extends Component {
  counter = 4
  state = {
    events: [],
    places: [52.229675, 21.012230]
  }

  componentDidMount() {
    EventAPI.getEvents()
      .then(data => {
        this.setState({
          events: data,
        })
      })
  }



  addEvent = (name, date, time, pub) => {
    const event =
    {
      id: this.counter,
      name,
      date,
      time,
      location: 'Warszawa',
      public: pub,
    }
    this.counter++;

    this.setState(prevState => ({
      events: [...prevState.events, event]
    }))
  }

  addPlaces = (places) => {
    this.setState({
      places: places
    })
  }



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
                <Page events={this.state.events} add={this.addEvent} addPlaces={this.addPlaces} />
              </div>
              <div className="main-map">
                <Map markerCordinates={this.state.places}
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${ApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />} ś
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
