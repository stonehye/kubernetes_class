var http = require('http');
var content = function(req, resp) {
    console.log(req)
    resp.end("came from " + req.url)
}
var w = http.createServer(content);
w.listen(7070);