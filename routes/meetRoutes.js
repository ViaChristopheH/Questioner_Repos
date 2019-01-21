import express from 'express';
import meetupfx from '../controllers/meetupControllers';
import meetupRsvpsController from '../controllers/meetupRsvpsController';

const route = express.Router();

// create a meetup
route.post('/', meetupfx.createMeetup);
// get meetup
route.get('/', meetupfx.fetchAllMeetups);
//get upcoming meetup
route.get('/upcoming', meetupfx.fetchUpcomingMeetups);
// get meetup by id
route.get('/:id', meetupfx.fetchAmeetup);
// create a question
route.post('/:id/questions', meetupfx.meetupQuestions);
// create Rsvps 
route.post('/:id/rsvps', meetupRsvpsController.bookingRsvps);
// Edit Rsvps
route.put('/:id/rsvps', meetupRsvpsController.editingRsvps);

export default route;