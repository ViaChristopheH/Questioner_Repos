import express from 'express';
import meetupfx from '../controllers/meetupControllers';

const route = express.Router();


route.post('/meetups', meetupfx.createMeetup);
route.get('/meetups', meetupfx.fetchAllMeetups);
route.get('/meetups/:id', meetupfx.fetchAmeetup);
route.get('/meetup/upcoming', meetupfx.fetchUpcomingMeetups);
route.post('/meetups/questions', meetupfx.meetupQuestions);
export default route;