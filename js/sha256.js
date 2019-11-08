'use strict';

function init(){
	/**
	 * hash password with sha256.
	 * @function
	 * @param {string} password - List of required fields.
	 * @param {string} salt - Data to be validated.
	 */
	var sha256_encode = function(data, secret){
		var value = sha256.hmac.create(secret).update(data).hex();
	    return value;
	};

	var a={
		"foo": "bar",
		"one": 1,
		"test": true
	};

	var a_json= JSON.stringify(a);
	var secret= 'ABCDEFGHIJK0123456789';
	var hash= sha256_encode(a_json, secret);

	console.log('- var a json : '+a_json);
	console.log('- var secret : '+secret);
	console.log('- encrypted var : ', hash);

	var debug={
		a_json: a_json,
		secret: secret,
		hash: hash
	}
	alert('debug: '+JSON.stringify(debug));
}

setTimeout(function(){
	init();
}, 2000);
