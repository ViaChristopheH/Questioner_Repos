import meetupRecords from '../data/meetupsRecords.js';
import meetupQuestions from '../data/meetupQuestions';


class meetings{
    constructor(){

    }

    static createMeetup(req, res){

        const { topic, location, happeningOn, tags} = req.body;

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

    static fetchAmeetup(req, res) {   
        const { id } = req.params;
        const meetup =  meetupRecords.find( record => record.id ===  Number(id));
       return res.status(200).send({
           status : 200,
           data : meetup
       });
};

    static fetchUpcomingMeetups(req, res){
        const now = Date.parse(new Date);
        const upcoming = meetupRecords.filter(record => Date.parse(record.happeningOn)>now);

        return res.status(200).send({
            status: 200,
            data: upcoming
        });

    };

        static meetupQuestions(req, res){

        const {title, body,} = req.body;

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

    };
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