import meetupRecords from '../data/meetupsRecords.js';
import meetupQuestions from '../data/meetupQuestions';
import meetupRsvps from '../data/meetupRsvps';

class meetings{
    constructor(){

    }

    static createMeetup(req, res){

        const { topic, location, happeningOn, tags} = req.body;
        if (!topic || !location || !happeningOn){
            return res.status(400).send({
                status : 400,
                error : 'All fields are required',
            })
        }

         const Records ={
             id : parseInt(meetupRecords.length + 1),
             createdOn : new Date(), 
             topic ,
             location,
             happeningOn,
             tags
         };
      meetupRecords.push(Records);

     return res.status(201).send({
          status : 201,
          data : [{
              topic,
              location,
              happeningOn,
              tags
          }]
      })

    };

    static fetchAllMeetups(req, res){
        return res.status(200).send({
            status : 200,
            data :
                meetupRecords
            
        })
    };

    static fetchAllrsvps(req, res){
        return res.status(200).send({
            status : 200,
            data : 
              meetupRsvps
        })
    }

    static fetchAmeetup(req, res) {   
        const { id } = req.params;

        if (!Number(id)) 
        return res.status(400).send({
            status:400,
            error : "ID must be a number"

        })
    
        const meetup =  meetupRecords.find( record => record.id ===  Number(id));

        if(!meetup) 
        return res.status(404).send ({
            status : 404,
            error : "ID not found"

        }) 
         
        return res.status(200).send({
            status : 200,
            data : meetup
        });

        }

       
    static fetchUpcomingMeetups(req, res){
        const now = Date.parse(new Date);
        const upcoming = meetupRecords.filter(record => Date.parse(record.happeningOn)>now);

         if (!upcoming)
         return res.status(404).send({
             status : 404,
             error : "No upcoming meetup"
         })
         
        return res.status(200).send({
            status: 200,
            data: upcoming
        });

    };

        static meetupQuestions(req, res){

        const {title, body,} = req.body;

        if (!title)
         return res.status (400).send({
             status : 400,
             error : "Title is required"
         })

        if (!body)
        return res.status (400).send({
            status : 400,
            error : "Question is required"
        })

         const Questions ={
             id : parseInt(meetupQuestions.length + 1),
             createdOn : new Date(), 
             createdBy : 2 ,
             meetup : 5,
             title,
             body,
             votes : 0
         };

      meetupQuestions.push(Questions);

     return res.status(201).send({
          status : 201,
          data : [{
              user : Questions.createdBy,
              meetup : Questions.meetup,
              title,
              body
            }]
      })

    }
    static upvoteQuestion(req, res){
        const {id} = req.params;
        const voting = meetupQuestions.find(aQuestion => aQuestion.id === Number(id))
        voting.votes = voting.votes + 1;

        const {meetup, title, body, votes} = voting;
        
        return res.send({
            status: 201,
            data : 
                 [{
                     meetup,
                     title,
                     body,
                     votes
                 }]

        });
        
    }

    static downvoteQuestion(req, res){

        const {id} = req.params;
        const voting = meetupQuestions.find(aQuestion => aQuestion.id === Number(id))
        voting.votes = voting.votes - 1;

        const {meetup, title, body, votes} = voting;
        
        return res.send({
            status: 201,
            data : 
                 [{
                     meetup,
                     title,
                     body,
                     votes
                 }]

        });

    }
}
 

export default meetings;