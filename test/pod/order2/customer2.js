var http = require('http');
var content = function(req, resp) {
    resp.send("came from " + req.url + "\n" + "customer2\n")
}
var w = http.createServer(content);
w.listen(8080);