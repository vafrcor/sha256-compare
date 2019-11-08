'use strict';

var crypto = require('crypto');

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha256.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var Sha256WithSalt = function(data, secret, salt){
    var hash = crypto.createHmac('sha256', secret); /** Hashing algorithm sha512 */
    hash.update(data+''+salt);
    var value = hash.digest('hex');
    return value;
};

var a={
	"foo": "bar",
	"one": 1,
	"test": true
};

var a_json= JSON.stringify(a);
var secret= 'ABCDEFGHIJK0123456789';
var salt= '9bdee4d3-2528-4dca-ad36-2bc43ad0f704';
var hash= Sha256WithSalt(a_json, secret, salt);

console.log('- var a json : '+a_json);
console.log('- var secret : '+secret);
console.log('- var salt : '+hash);
console.log('- encrypted var : ', hash);

