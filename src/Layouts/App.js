import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/sass/App.sass';
import Header from './Header';
import Filters from './Filters';
import EventList from './EventList';
import Footer from './Footer';
import SimpleMap from './Map'




class App extends Component {
  state = {
    events: [
      {
        id: 0,
        name: 'Piwo na górkach',
        date: '12.10.2020',
        time: '18:00',
        location: 'Warszawa',
        public: true,
      },
      {
        id: 1,
        name: 'Rowerem na molo',
        date: '20.09.2020',
        time: '12:00',
        location: 'Trojmiasto',
        public: true,
      },
      {
        id: 2,
        name: 'Kino pod chmurką',
        date: '15.06.2021',
        time: '20:00',
        location: 'Warszawa',
        public: true,
      },
      {
        id: 3,
        name: "Ognisko na plaży",
        date: "05.07.2021",
        time: "21:00",
        location: 'Warszawa',
        public: true,
      },
    ]
  }

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
              <EventList  events={this.state.events}/>
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
