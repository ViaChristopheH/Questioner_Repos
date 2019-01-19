import express from 'express';
import meetupfx from '../controllers/meetupControllers';
import meetupRsvpsController from '../controllers/meetupRsvpsController';

const route = express.Router();

// create a meetup
route.post('/meetups', meetupfx.createMeetup);
// get meetup
route.get('/meetups', meetupfx.fetchAllMeetups);
// get meetup by id
route.get('/meetups/:id', meetupfx.fetchAmeetup);
//get upcoming meetup
route.get('/meetups/upcoming', meetupfx.fetchUpcomingMeetups);
// create a question
route.post('/meetups/:id/questions', meetupfx.meetupQuestions);
// fetch a meetup question
route.get('/questions', meetupfx.fetchMeetupquestions)
// upvote a question
route.patch('/questions/:id/upvote', meetupfx.upvoteQuestion);
// downvote a question
route.patch('/questions/:id/downvote', meetupfx.downvoteQuestion);
// create Rsvps 
route.post('/meetups/:id/rsvps', meetupRsvpsController.bookingRsvps);
// Edit Rsvps
route.put('/meetups/:id/rsvps', meetupRsvpsController.editingRsvps);

export default route;