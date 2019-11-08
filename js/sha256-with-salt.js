'use strict';

function init(){
	/**
	 * hash password with sha256.
	 * @function
	 * @param {string} password - List of required fields.
	 * @param {string} salt - Data to be validated.
	 */
	var sha256_plus_salt_encode = function(data, secret, salt){
		var value = sha256.hmac.create(secret).update(data+''+salt).hex();
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
	var hash= sha256_plus_salt_encode(a_json, secret, salt);

	console.log('- var a json : '+a_json);
	console.log('- var secret : '+secret);
	console.log('- var salt : '+salt);
	console.log('- encrypted var : ', hash);

	var debug={
		a_json: a_json,
		secret: secret,
		salt: salt,
		hash: hash
	}
	alert('debug: '+JSON.stringify(debug));
}

setTimeout(function(){
	init();
}, 2000);
