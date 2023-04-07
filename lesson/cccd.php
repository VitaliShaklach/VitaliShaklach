<!DOCTYPE html>
<html>
<body>

<?php
$params = [
    'merchant_id' => 31212,
    'amount' => 10.59,
    'currency' => 'USD',
    'order_id' => time(),
    'order_desc' =>'Play',
    'response_url' => 'http://site.com/form_response.php',
    'server_url' => 'http://site.com/form_server.php'
];
$api5_key = 'YAslybVYdF1RIMa0zSdai8ZWneTrxxnLa9FiPQDQtJK9brDYCbsfhPlP5';
$data = array_filter($params,
    function ($var) {
        return $var !== '' && $var !== null;
    });
ksort($data);
$signature = $api5_key;
foreach ($data as $k => $v) {
    $signature .= '|' . trim($v);
}
$url = '/payment/invoice/post/add';
$data['signature'] = strtolower(sha1($signature));

//echo $signature
//echo strtolower(sha1($signature))
echo strtolower($signature);


?>  
 
</body>
</html>
