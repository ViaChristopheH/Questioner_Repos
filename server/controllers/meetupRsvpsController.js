import meetupRsvps from '../data/meetupRsvps';
import meetupsRecords from '../data/meetupsRecords';

class Rsvps {

    constructor (){
    }

    static bookingRsvps(req, res){
       const { id } = req.params;
       const records = {
        id : parseInt (meetupRsvps.length + 1),
        meetup : parseInt(id),
        user : 12,
        response : req.body.response
       }

       meetupRsvps.push(records);
       const meetup = meetupsRecords.find(record => record.id === parseInt(id));
       
       if(!meetup){
           return res.status(404).send({
               status: 404,
               error: 'meetup not found'
           })
       }

       return res.status(201).send({
           status : 201 ,
           data : [{
               meetup : records.meetup,
               topic : meetup.topic,
               status: records.response
           }]
       })

       
    }

    static editingRsvps(req, res){
        const { id } = req.params;
        
        const meetup = meetupsRecords.find(record => record.id === parseInt(id));
        
        if(!meetup){
            return res.status(404).send({
                status: 404,
                error: 'meetup not found'
            })
        }
         meetup.response = req.body.response;
        return res.status(201).send({
            status : 201 ,
            data : [
              meetup
            ]
        })
 
        
     }
    


};


export default Rsvps;