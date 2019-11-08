<?php

$a=[
	"foo"=>"bar",
	"one"=>1,
	"test"=>true
];

$secret= 'ABCDEFGHIJK0123456789';
$a_json= json_encode($a);
$a_hash= hash_hmac('sha256', $a_json, $secret);
echo "\r\n";
echo "- var \$a (json) : ".$a_json;
echo "\r\n";
echo "- var \$secret : ".$secret;
echo "\r\n";
echo "- encrypted var \$a : ".$a_hash;
echo "\r\n";