var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
module.exports = router;
var mongoose = require('mongoose');
var marked = require('marked');
mongoose.connect('mongodb://localhost/wikistack');
var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);


describe('Test the Page Model', function () {
    describe('See if validation works on page', function () {
    	var page;
    	beforeEach(function() {
    		page = new Page()
    	})

        it('Throws error if no title in POST request', function (done) {
        	//if pageSchema's title does not have a requirement of "true", it does 
        	//not run through the validation function, so it's not logged in err.errors
        	page.validate(function(err) {
        		expect(err.errors).to.have.property('title')
        		done()
        	})
        });
        //xit('Throws error if no content in POST request' , function () {});
    });
    describe('See if static works', function () {
    	beforeEach(function(done) {
    		Page.create({
    			title: 'foo',
    			content: "bar",
    			tags: ['foo','bar']
    		}, done)
    	})
    	it('Throws error if tag is not in tags' , function () {
    		console.log(Page.findByTag("foo"));
    		Page.findByTag("foo").then(function(data) {
    			console.log(data.tag);
    		})
    	});
    });
});
describe('A different category', function () {});