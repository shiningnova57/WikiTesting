console.log("Frankenstein");

var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

describe("first test", function() {
	var var1 = 0;
	var var2 = 0;
	beforeEach(function(){
		var1 = 2;
		var2 = 2;
	});
	it("equals 4", function() {
		var result = var1 + var2;
		expect(result).to.equal(4);
	});
});


describe("how to use time difference", function() {
	it('confirms setTimeout\'s timer accuracy', function (done) {
	    var start = new Date();
	    setTimeout(function () {
	        var duration = new Date() - start;
	        expect(duration).to.be.closeTo(1000, 50);
	        done();
	    }, 1000);
	});
})

describe("how to use spy", function() {
	
	it('will invoke a function once per element', function () {
	    var arr = ['x','y','z'];
	    function logNth (val, idx) {
	        console.log('Logging elem #'+idx+':', val);
	    }
	    logNth = chai.spy(logNth);
	    arr.forEach(logNth);
	    expect(logNth).to.have.been.called.exactly(arr.length);
	});
})

describe('A test category', function () {
    describe('A subcategory', function () {
        xit('tests something', function () {});
        xit('tests another aspect of the same thing' , function () {});
    });
    describe('A different subcategory', function () {});
});
describe('A different category', function () {});










