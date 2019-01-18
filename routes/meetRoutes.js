import express from 'express';
import meetupfx from '../controllers/meetupControllers';
import meetupRsvpsController from '../controllers/meetupRsvpsController';

const route = express.Router();

// create
route.post('/meetups', meetupfx.createMeetup);
// get meetup
route.get('/meetups', meetupfx.fetchAllMeetups);
// get meetup by id
route.get('/meetups/:id', meetupfx.fetchAmeetup);
//get upcoming meetup
route.get('/meetups/upcoming', meetupfx.fetchUpcomingMeetups);
// create a question
route.post('/meetups/:id/questions', meetupfx.meetupQuestions);
// upvote a question
route.patch('/questions/:id/upvote', meetupfx.upvoteQuestion);
// downvote a question
route.patch('/questions/:id/downvote', meetupfx.downvoteQuestion);
// Rsvps 
route.post('/meetups/:id/rsvps', meetupRsvpsController.bookingRsvps);
route.put('/meetups/:id/rsvps', meetupRsvpsController.editingRsvps);

export default route;