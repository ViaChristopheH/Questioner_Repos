import express from 'express';
import bodyParser from 'body-parser';
import meetupRoutes from './routes/meetRoutes';
import userRoutes from "./routes/userRoutes";
import questionRoutes from './routes/questionRoutes';
import pool from './config/database';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const port = process.env.PORT || 3000;
// user table
pool.query(`
CREATE TABLE IF NOT EXISTS usertable (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(128) NOT NULL,
    lastname VARCHAR(128) NOT NULL,
    othername VARCHAR(128),
    email VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    username VARCHAR(128),
    isadmin boolean,
    registeredon DATE,
    phonenumber VARCHAR(10)
  )
`);
// meetup

//question
app.use('/api/v1/meetups', meetupRoutes);
app.use('/api/v1/questions', questionRoutes);
app.use("/api/v1/users",userRoutes);
app.use('/', (req, res) => {
    return res.status(200).send({
    msg: "Welcome to Questioner",
    POSTMeetup: "api/v1/meetups",
    GETMeetups: "api/v1/meetups",
    })
});

app.listen(port, ()=>{
    console.log('you are listening on port 3000');
})

export default app;
