const http = require('http');
const url = require('url');

console.log('server start port 3000');

http.createServer((request, response)=>{
    console.log('server work');
    if(request.method === 'GET'){
        let urlRequest = url.parse(request.url, true);
        console.log(urlRequest.query.data);
        if(urlRequest.query.data){
            response.end('Node server work: ' + urlRequest.query.data)
        }else{
            response.end('Node server work: ' + 'no data')
        }
    }
}).listen(3000);


// nginx -t
// sudo service nginx restart