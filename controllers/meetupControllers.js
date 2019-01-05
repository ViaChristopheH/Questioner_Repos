import meetupRecords from '../data/meetupsRecords.js';


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
           data : meetupRecords
       });
};

    static fetchUpcomingMeetups(req, res){
        return res.status(200).send({
            status : 200,
            data :[
                meetupRecords
            ] 
                
        })
    };


    static meetupQuestions(req, res){
        return res.status(201).send({
            status : 201,
            data:[
                meetupQuestions
            ]
                

        })
    };

    static upvoteQuestion(req, res){

    }

    static downvoteQuestion(req, res){

    }

    static meetupRsvp(req, res){
        
    }


}
 

export default meetings;