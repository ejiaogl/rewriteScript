var body = $response.body
var json = JSON.stringify(body)

delete json.ad
delete json.adPriority
$done(json)
