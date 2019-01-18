import express from 'express';
import bodyParser from 'body-parser';
import meetupRoutes from './routes/meetRoutes'
import meetup from './controllers/meetupControllers';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const port = process.env.PORT || 3000;


app.use('/api/v1', meetupRoutes);
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
