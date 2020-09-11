class  EventAPI {
     static getEvents = () =>{
        return( new Promise ( (resolve) =>
        resolve(
            [
            
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
        ])))
    }
    
}
 
export default EventAPI;