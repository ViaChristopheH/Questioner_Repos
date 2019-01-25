import express from "express";
import userController from '../controllers/userController'
const router = express.Router();

// create user
router.post("/", userController.create);


export default router;