import express from "express";

const router=express.Router();

//controllers
const User=require("../controllers/userController");

router.post("/user",User.create);
// create a meetup
router.post('/', meetupfx.createMeetup);
// get meetup
router.get('/', meetupfx.fetchAllMeetups);
//get upcoming meetup
router.get('/upcoming', meetupfx.fetchUpcomingMeetups);
// get meetup by id
router.get('/:id', meetupfx.fetchAmeetup);
// create a question
router.post('/:id/questions', meetupfx.meetupQuestions);
// create Rsvps 
router.post('/:id/rsvps', meetupRsvpsController.bookingRsvps);
// Edit Rsvps
router.put('/:id/rsvps', meetupRsvpsController.editingRsvps);

module.exports=router;