// var express = require('express');
// var router = express.Router();
// var models = require('../models');
// var Page = models.Page;
// var User = models.User;
// module.exports = router;
// var mongoose = require('mongoose');
// var marked = require('marked');
// mongoose.connect('mongodb://localhost/wikistack');
// var expect = require('chai').expect;
// var chai = require('chai');
// var spies = require('chai-spies');
// chai.use(spies);

// describe('Test the Page Model', function () {
//     var page;

//     describe('See if validation works on page', function () {
//         beforeEach(function() {
//             page = new Page()
//         })

//         afterEach(function(done){
//             Page.remove({}).then(function(){done();})
//         });

//         it('Throws error if no title in POST request', function (done) {
//         	//if pageSchema's title does not have a requirement of "true", it does 
//         	//not run through the validation function, so it's not logged in err.errors
//         	page.validate(function(err) {
//         		expect(err.errors).to.have.property('title')
//         		done()
//         	})
//         });
//     });

//     describe('See if static works', function () {
        
//         beforeEach(function(done) {
//             Page.create({
//                 title: 'jai',
//                 content: "frank",
//                 tags: ['jai','frank']
//             }, done)
//         });

//         afterEach(function(done){
//             Page.remove({}).then(function(){done()})
//         });

//         it('Throws error if tag is not in tags' , function (done) {
//             //console.log(Page.findByTag("foo"));
//             Page.findByTag("frank").then(function(data) {
//                 expect(data).to.have.lengthOf(1);
//                 done();
//             }).then(null,done)
//         });

//         it('it does not return pages w/o tag' , function (done) {
//             //console.log(Page.findByTag("foo"));
//             Page.findByTag("testingsucks").then(function(data) {
//                 expect(data).to.have.lengthOf(0);
//                 done();
//             }).then(null,done)
//         });

//     });
//         //xit('Throws error if no content in POST request' , function () {});



//     describe('See if FIndSimilarWorks', function () {
//         var temp;
//         beforeEach(function(done) {
//             Page.create({
//                 title: 'james',
//                 content: "frankies",
//                 tags: ['james','frankie']
//             }).then(function(){
//                 Page.create({
//                     title: 'frankies',
//                     content: "james",
//                     tags: []
//                 })
//             }).then(function() {
//                 return Page.create({
//                     title: "Fullstack",
//                     content: "is 13 weeks long",
//                     tags:['james']
//                 })
//             }).then(function(page1){
//                 temp = page1;
//                 done();
//             });
//         })

//         afterEach(function(done){
//             Page.remove({}).then(function(){done()})
//         });


//         it('Should fail when no match is made' , function (done) {
//                 temp.findSimilar().then(function(data) {
//                     expect(data).to.have.lengthOf(1);
//                     done();
//                 }).then(null,done)
//         });
//     });
    
//     describe('See if virtuals work', function () {
//         var temp;

//         beforeEach(function(done) {
//             Page.create({
//                 title: 'james franklin is awesome',
//                 content: "frankies",
//                 tags: ['james','frankie']
//             }).then(function(page1){
//                 temp = page1;
//                 //console.log(temp);
//                 done();
//             });

//         })

//         afterEach(function(done){
//             Page.remove({}).then(function(){done();})
//         });

//         it('It creates a urlTitle', function (done) {
//             expect(temp.route).to.equal('/wiki/james_franklin_is_awesome');
//                 done();
//             });

//     });

//     describe('See if hook work', function () {
//         var temp;

//         beforeEach(function(done) {
//             Page.create({
//                 title: 'james franklin is awesome',
//                 content: "frankies",
//                 tags: ['james','frankie'],
//                 urlTitle: 'omg_123'
//             }).then(function(page1){
//                 temp = page1;
//                 //console.log(temp);
//                 done();
//             });
//         })

//         afterEach(function(done){
//             Page.remove({}).then(function(){done();})
//         });
        
//         it("checks to see if urlTitle is set after validation", function(done) {
//             expect(temp.urlTitle).to.equal('james_franklin_is_awesome');
//             done();
//         });

//     });




// });



// describe('A different category', function () {});














