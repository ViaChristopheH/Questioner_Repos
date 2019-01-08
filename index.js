import express from 'express';
import bodyParser from 'body-parser';
import meetupRoutes from './routes/meetRoutes'
import meetup from './controllers/meetupControllers';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const port = process.env.PORT || 3000;


app.use('/api/v1', meetupRoutes);


app.listen(port, ()=>{
    console.log('you are listening on port 3000');
})

export default app;
