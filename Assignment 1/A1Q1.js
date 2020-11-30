var http=require('http');

var server=http.createServer(function(req,res)
{
    console.log('Request was made:'+req.url);
    res.writeHead(200,{'Content-type': 'text/plain'});
    res.end('Hello buddies');
});

server.listen(3000,'127.0.0.1');

console.log(`Success i'm listening from port:3000` );