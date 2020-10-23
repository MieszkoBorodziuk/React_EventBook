const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const eventsRoutes = require('./routes/events');
const usersRoutes = require('./routes/users');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/events', eventsRoutes);
server.use('/users', usersRoutes);

server.listen(8000, () => console.log('Server is started...'));
