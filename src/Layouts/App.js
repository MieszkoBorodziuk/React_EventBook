import React, { Component } from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import '../Styles/sass/App.sass';
import Header from './Header';
import Filters from './Filters';
import EventList from './EventList';
import Footer from './Footer';
import SimpleMap from './Map'
import AddEvent from './AddEvent';
import Page from '../Layouts/Page'




class App extends Component {
  counter = 4
  state = {
    events: [
      {
        id: 0,
        name: 'Piwo na górkach',
        date: '2020-10-12',
        time: '18:00',
        location: 'Warszawa',
        public: true,
      },
      {
        id: 1,
        name: 'Rowerem na molo',
        date: '2020-09-20',
        time: '12:00',
        location: 'Trojmiasto',
        public: true,
      },
      {
        id: 2,
        name: 'Kino pod chmurką',
        date: '2021-06-15',
        time: '20:00',
        location: 'Warszawa',
        public: true,
      },
      {
        id: 3,
        name: "Ognisko na plaży",
        date: "2021-07-05",
        time: "21:00",
        location: 'Warszawa',
        public: true,
      },
    ]
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

  render() {
    return (
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
              <Page events={this.state.events} add={this.addEvent} />
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
