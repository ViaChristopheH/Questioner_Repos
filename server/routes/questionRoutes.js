import express from 'express';
import meetupfx from '../controllers/meetupControllers';

const route = express.Router();

// fetch a meetup question
route.get('/', meetupfx.fetchMeetupquestions);
// upvote a question
route.patch('/:id/upvote', meetupfx.upvoteQuestion);
// downvote a question
route.patch('/:id/downvote', meetupfx.downvoteQuestion);
//create a question
route.post('/', meetupfx.meetupQuestions);

export default route;