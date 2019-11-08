<?php
define('HASH_SALT_MAX_LENGTH', 16);

$a=[
	"foo"=>"bar",
	"one"=>1,
	"test"=>true
];

$a_json= json_encode($a);
$salt_intermediate= md5(uniqid(rand(), true));
# $salt= substr($salt_intermediate, 0, HASH_SALT_MAX_LENGTH);
$salt= '9bdee4d3-2528-4dca-ad36-2bc43ad0f704';
$data= $a_json.$salt;

$secret= 'ABCDEFGHIJK0123456789';

$a_hash= hash_hmac('sha256', $data, $secret);
echo "\r\n";
echo "- var \$a (json) : ".$a_json;
echo "\r\n";
echo "- var \$salt_intermediate : ".$salt_intermediate;
echo "\r\n";
// echo "- const HASH_SALT_MAX_LENGTH : ".HASH_SALT_MAX_LENGTH;
// echo "\r\n";
echo "- var \$secret : ".$secret;
echo "\r\n";
echo "- var \$salt : ".$salt;
echo "\r\n";
echo "- encrypted var \$a : ".$a_hash;
echo "\r\n";