'use strict';

var app = require('../app/app');
//var expect = require('chai').expect;
var chai = require('chai');
var expect = chai.expect;

var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var vowelCountSpy;
var isPalindromeSpy;
describe('generateMessage without sinon.spy and sinon.stub', function ()
{
    it ('should be a palindrome and has a vowels' ,function() {
    expect(app.generateMessage('saippuakivikauppias')).to.eql(
        {
          "message": "saippuakivikauppias is palindrome and has 10 vowels",
          "palindrome": true,
          "vowel": 10
        })
    });
  it ('should be a palindrome and has no vowels' ,function() {
    expect(app.generateMessage('zxcvvcxz')).to.eql(
        {
          "message": "zxcvvcxz is palindrome and has no vowels",
          "palindrome": true,
          "vowel": 0
        })
  });
    it ('should not be a palindrome and has a vowels', function(){
      expect(app.generateMessage('Palindrom')).to.eql(
          {
            "message": "Palindrom is not palindrome and has 3 vowels",
            "palindrome": false,
            "vowel": 3
          })
    });
  it ('should not be a palindrome and has no vowels', function(){
    expect(app.generateMessage('zxcvvcxzz')).to.eql(
        {
          "message": "zxcvvcxzz is not palindrome and has no vowels",
          "palindrome": false,
          "vowel": 0
        })
  });
});

describe('generateMessage with sinon.spy adn sinon.stub', function ()
{
    describe('spy', function ()
    {

     before(function () {

       vowelCountSpy = sinon.spy(app, 'vowelCount');
       isPalindromeSpy = sinon.spy(app, 'isPalindrome');
       app.generateMessage(['Kajak','Pop','Zakaz']);
     });
     after(function(){
       vowelCountSpy.restore();
       isPalindromeSpy.restore();
    });

        describe('callCount', function ()
        {
          it('should call generateMessage function three times',function(){
            expect(isPalindromeSpy).callCount(3);
          });

        });
        describe('calledWith', function ()
        {
        });
    });

    describe('stub', function ()
    {
        describe('returns', function ()
        {

        });
        describe('withArgs', function ()
        {

        });
        describe('callsFake', function ()
        {

        });
    });
});
