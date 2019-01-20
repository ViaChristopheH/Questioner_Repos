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
            res.body.should.have.property('data');
            res.body.data.should.be.a('array');
           
            done();
        })
      })
  });

  describe('GET/ Specific meetup', () => {
      it('Should return error meetup id should be a number', (done) => {
          chai.request(app)
          .get('api/v1/meetups/INVALID_ID')
          .end((err, res) => {
              res.should.have.status(400);
              res.body.error.should.be.eql('ID must be a number');
              done();
          });
      });
  });

 
  describe('get a specific meetup', () => {
     it ('/GET /meetupsByID', (done) =>{

        chai.request(app)
            .get('/api/v1/meetups/1')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                done();
                

            })
     })
 });

  describe('increase by 1 to vote points of a meetup question', () => {
     it('PATCH /questions/<question-id>/upvote', (done) => {

        chai.request(app)
            .patch('/api/v1/questions/1/upvote')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(201);
                res.body.should.have.property('data');
                res.body.should.be.a('array');
                
               done();
              })
     }

     )
 });

 
describe('Decrease by 1 to vote points of a meetup question', () => {
    it('PATCH  /questions/<question-id>/downvote', (done) => {

        chai.request(app)
            .patch('/api/v1/questions/1/downvote')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(201);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                
               done();
            })
    })
})
