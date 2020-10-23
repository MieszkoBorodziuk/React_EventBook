const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/:id', eventsController.getEvent);
router.get('/', eventsController.getEvents);
router.post('/', eventsController.postEvent);
router.put('/', eventsController.putEvent);
router.delete('/:id', eventsController.deleteEvent);
router.use((request, response) => response.status(404).end());

module.exports = router;