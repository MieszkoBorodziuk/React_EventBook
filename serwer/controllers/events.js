const { v4: uuid } = require('uuid');
const { patchUser } = require('./events');

const eventsData = [
  {
    id: '0',
    title: 'serwer Piwo na górkach',
    date: '2020-10-12',
    time: '18:00',
    localization:
    {
      0:
      {
        geometry:
        {
          location:
          {
            lat: 52.229675,
            lng: 21.042230
          }
        }
      }
    }
    ,
    public: true,
    marker: [52.229675, 21.022230],
  },
  {
    id: '1',
    title: 'serwer Rowerem na molo',
    date: '2020-09-20',
    time: '12:00',
    localization:
    {
      0:
      {
        geometry:
        {
          location:
          {
            lat: 52.229675,
            lng: 21.042230
          }
        }
      }
    }
    ,
    public: true,
    marker: [52.229675, 21.032230],
  },
  {
    id: '2',
    title: 'serwer Kino pod chmurką',
    date: '2021-06-15',
    time: '20:00',
    localization:
    {
      0:
      {
        geometry:
        {
          location:
          {
            lat: 52.229675,
            lng: 21.042230
          }
        }
      }
    }
    ,
    public: true,
    marker: [52.229675, 21.042230],
  },
  {
    id: '3',
    title: "serwer Ognisko na plaży",
    date: "2021-07-05",
    time: "21:00",
    localization:
    {
      0:
      {
        geometry:
        {
          location:
          {
            lat: 52.229675,
            lng: 21.042230
          }
        }
      }
    }
    ,
    public: true,
    marker: [52.229675, 21.062230],
  },
];

exports.getEvents = (request, response, next) => {
  try {
    response.status(200).json({
      events: eventsData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /events',
    });
  }
};

exports.getEvent = (request, response, next) => {
  try {
    const { id } = request.params;
    const eventToSend = eventsData.find(event => event.id === id);

    if (!eventToSend) {
      response.status(404).json({
        message: 'Nie znaleziono eventu o podanym id',
      });

      return;
    }

    response.status(200).json({
      event: eventToSend,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie GET w endpointcie /events/:id',
    })
  }
};

exports.postEvent = (request, response, next) => {
  try {
    const { title, date, time, localization, category } = request.body;
    if (!title || !date || !time || !localization) {
      response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji',
      });

      return;
    }

    // const isEventExist = eventsData.some(({title: currentTitle}) => currentTitle === title);
    // if (isEventExist) {
    //   response.status(409).json({
    //     message: `Istnieje już w bazie kurs ${title}`,
    //   });

    //   return;
    // }

    const newEvent = {
      title: title,
      id: uuid(),
      date,
      time,
      localization,
      category,
    };

    eventsData.push(newEvent);

    response.status(201).json({
      events: eventsData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /events'
    });
  }
};

exports.putEvent = (request, response, next) => {
  try {
    const { title, id, date, time, localization } = request.body;
    if (!title || !date || !time || !localization) {
      response.status(400).json({
        message: 'Nie podano wszystkich wymaganych informacji',
      });

      return;
    }

    const indexEventToUpdate = eventsData.findIndex(event => event.id === id);
    if (indexEventToUpdate === -1) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });

      return;
    }


    eventsData.splice(indexEventToUpdate, 1, request.body);

    response.status(202).json({
      events: eventsData
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie PUT w endpointcie /events'
    });
  }
};

exports.deleteEvent = (request, response, next) => {
  try {
    const { id } = request.params;

    console.log(id);
    const indexEventToDelete = eventsData.findIndex(event => event.id === id);

    if (indexEventToDelete === -1) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym id',
      });

      return;
    }

    eventsData.splice(indexEventToDelete, 1);
    response.status(200).end();
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie DELETE w endpointcie /events/:id',
    });
  }
};

exports.eventsData = eventsData;