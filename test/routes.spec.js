var supertest = require('supertest');
var app = require("../app");
var agent = supertest.agent(app);

describe('http requests', function() {

    describe('GET /', function() {
        it('gets 200', function(done) {
        	agent
        	.get('/')
        	//.expect(200,done) could have used to end
        	.expect(200)
        	.expect('Content-Type', /html/) 
        	.end(done());  		
        });
    });

    describe('GET /add', function () {
       	it('gets 200', function (done) {
       		agent
        	.get('/add')
        	.expect(200)
        	.expect('Content-Type', /html/) 
        	.end(done());  		
        });
    });

    describe('GET /wiki/:urlTitle', function() {
    	// beforeEach(function(done) {
     //        Page.create({
     //            title: 'jai',
     //            content: "frank",
     //            tags: ['jai','frank']
     //        }, done)
     //    });

     //    afterEach(function(done){
     //        Page.remove({}).then(function(){done()})
     //    });

        it('gets 404 on page that doesnt exist', function(done) {
        	agent
        	.get('/wiki/this_shouldn_work')
        	.expect(404,done);
        });

        it('gets 200 on page that does exist', function(done) {
        	agent
        	.get('/wiki/jai')
        	.expect(200,done);
        });
    });

    describe('GET /wiki/search', function() {
        xit('gets 200', function() {});
    });

    describe('GET /wiki/:urlTitle/similar', function() {
        xit('gets 404 for page that doesn\'t exist', function() {});
        xit('gets 200 for similar page', function() {});
    });


    describe('GET /wiki/add', function() {
        xit('gets 200', function() {});
    });


    describe('POST /wiki/', function() {
        it('creates a page in db', function(done) {
        	agent
    		.post('/wiki')
    		.send({name:"jaiprasad", email:"jai@gmail.com",content: "Fullstack is longer", title: "Fullstack"})
    		.expect(302,done)
        });
    });

});



