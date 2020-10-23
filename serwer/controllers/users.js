const { eventsData } = require('./events');

const usersData = [
  {
    accessLevel: 0,
    events: [
      eventsData[0].id,
      eventsData[1].id,
      eventsData[2].id,
    ],
    login: 'User',
    password: '123456',
  },
  {
    accessLevel: 1,
    events: [
      eventsData.map(event => event.id)
    ],
    login: 'Admin',
    password: '******',
  }
];

exports.postUser = (request, response, next) => {
  try {
    const { login, password } = request.body;

    const user = usersData.find(u => u.login === login);
    if (!user) {
      response.status(404).json({
        message: 'Użytkownik o podanym loginie nie istnieje',
      });
  
      return;
    }

    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      response.status(401).json({
        message: 'Hasło lub login się nie zgadza',
      });

      return;
    }

    response.status(200).json({
      user,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie POST w endpointcie /users',
    });
  }
};

exports.patchUser = (request, response, next) => {
  try {
    const { login, eventId } = request.body;

    const event = eventsData.find(event => event.id === eventId);
    const user = usersData.find(user => user.login === login);

    if (!event) {
      response.status(404).json({
        message: 'Nie znaleziono kursu o podanym Id',
      });

      return;
    } else if (!user) {
      response.status(404).json({
        message: 'Nie znaleziono uzytkownika o podanym loginie',
      });

      return;
    }

    const hasUserEventAlready = user.events.some(id => id === eventId);
    if (hasUserEventAlready) {
      response.status(200).json({
        user,
      });

      return;
    }

    // const hasUserEnoughtMoney = user.budget - event.price >= 0;
    // if (!hasUserEnoughtMoney) {
    //   response.status(403).json({
    //     message: 'Uzytkownik nie posiada wystarczających funduszy',
    //   });

    //   return;
    // }

    // user.budget = Number((user.budget - event.price).toFixed(2));
    user.events.push(eventId);
    response.status(202).json({
      user,
    });
  } catch (error) {
    response.status(500).json({
      error,
      message: 'Oops! Coś poszło nie tak, przy metodzie PATCH w endpointcie /users',
    });
  }
};