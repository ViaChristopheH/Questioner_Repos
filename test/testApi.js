import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.should();

chai.use(chaiHttp);

  describe('fetch out all meetups', () => {
      it('/GET /meetups', (done) => {

        chai.request(app)
        .get('/api/v1/meetups')
        .end((err, res) => {
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(200);           
            done();
        })
      })
  });



  describe('GET/ Specific meetup', () => {
      it('Should return meetup id should be a number', (done) => {
          chai.request(app)
          .get('/api/v1/meetups/1')
          .end((err, res) => {
              res.body.should.be.a('object');
              res.body.should.have.property('status').eql(200);
              done();
          });
      });
  });

  describe('Fetch all upcoming meetups', ()=>{
    it('/GET /meetup/upcoming', (done)=>{
         

       chai.request(app)
            .get('/api/v1/meetups/upcoming')
            .end((err, res)=>{

               res.body.should.be.a('object');
               res.body.should.have.property('status').eql(200);
               res.body.should.have.property('data');
               res.body.data.should.be.a('array');
               res.body.data[0].should.have.property('id').eql(2);
               res.body.data[0].should.have.property('createdOn');
               res.body.data[0].should.have.property('topic').eql('Luxury things');
               res.body.data[0].should.have.property('location').eql('Gasabo');
               res.body.data[0].should.have.property('happeningOn').eql('February 19, 2019');
               res.body.data[0].should.have.property('Tags');
               res.body.data[0].Tags.should.be.a('array');
               done();
            })



    })
});

 
  describe('increase by 1 to vote points of a meetup question', () => {
     it('PATCH /questions/<question-id>/upvote', (done) => {
        chai.request(app)
            .patch('/api/v1/questions/4/upvote')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.should.have.status(201);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                
               done();
              })
     }

     )
 });

 
describe('Decrease by 1 to vote points of a meetup question', () => {
    it('PATCH  /questions/<question-id>/downvote', (done) => {

        chai.request(app)
            .patch('/api/v1/questions/4/downvote')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(201);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                
               done();
            })
    })
});

describe('create a meetup question', () => {
    it('POST  /questions/', (done) => {
const questionData = {
    title: 'Market rise', 
    body: 'Can the price be revised?'
}
        chai.request(app)
            .post('/api/v1/questions/')
            .send(questionData)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(201);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                
               done();
            })
    })

    it('should not create a question without a body', (done) => {
        const questionData = {
            title: 'Market rise' 
        }
                chai.request(app)
                    .post('/api/v1/questions/')
                    .send(questionData)
                    .end((err, res) => {
                        res.body.should.be.a('object');
                        res.body.should.have.property('status').eql(400);
                        res.body.should.have.property('error').eql('\"body\" is required'); 
                       done();
                    })
            })
});
