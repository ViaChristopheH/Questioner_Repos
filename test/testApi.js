import chai from 'chai';
 import chaiHttp from 'chai-http';
 import app from '../index';

 chai.should();

 chai.use(chaiHttp);

  describe('fetch out all meetups', () => {
      it('/GET /meetups', (done) => {

        chai.request(app)
        .get('api/v1/meetups')
        .end((err, res) => {
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(200);
            res.body.should.have.property('data');
            res.body.data.should.be.a('array');
            res.body.data[0].should.have.property('id');
            res.body.data[0].should.have.property('createdOn');
            res.body.data[0].should.have.property('topic');
            res.body.data[0].should.have.property('location');
            res.body.data[0].should.have.property('happeningOn');
            res.body.data[0].should.have.property('tags');
            res.body.data[0].tags.should.be.a('array');
            done();
        })
      })
  });


  describe('get a specific meetup', () => {
     it ('/GET /meetupsByID', (done) =>{

        chai.request(app)
            .get('api/v1/meetups/:id')
            .end((err, res) =>{
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('array');
                res.body.data[0].should.have.property('id').eql(1);
                res.body.data[0].should.have.property('topic').eql('The DIY Things');
                res.body.data[0].should.have.property('location').eql('Kicukiro');
                res.body.data[0].should.have.property('happeningOn').eql('January 19, 2019');
                res.body.data[0].should.have.property('tags');
                res.body.data[0].should.have.property('tags').eql('#DIY', '#doItYourself')
                res.body.data[0].tags.should.be.a('array');
                done();
                

            })
     })
 });

  describe('increase by 1 to vote points of a meetup question', () => {
     it('PATCH /questions/<question-id>/upvote', (done) => {

        chai.request(app)
            .patch('api/v1/questions/1/upvote')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(201);
                res.body.should.have.property('data');
                res.body.should.be.a('array');
                res.body.data[0].should.have.property('meetup').eql(5);
                res.body.data[0].should.have.property('title').eql('student claims');
                res.body.data[0].should.have.property('body').eql('all claims concerning students in association');
                res.body.data[0].should.have.property('votes').eql(34);
               done();
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
                res.body.data[0].should.have.property('meetup').eql(5);
                res.body.data[0].should.have.property('title').eql('student claims');
                res.body.data[0].should.have.property('body').eql('all claims concerning students in association');
                res.body.data[0].should.have.property('votes').eql(34);
               done();
            })
    })
})
