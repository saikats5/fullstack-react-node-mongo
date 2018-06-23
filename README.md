# fullstack-react-node-mongo

https://github.com/jscomplete/learn-fullstack-javascript

git pull origin master --allow-unrelated-histories
babel-node server.js

import https from 'https';
https.get('https://www.lynda.com', res=>{
    console.log('Response',res.statusCode);
    res.on('data', chunk=>{
        console.log(chunk.toString());
    });
});

import http from 'http';
const server = http.createServer();
server.listen(8080);

server.on('request', (req, res)=>{
    res.write('Hello World\n');
    setTimeout(()=>{
        res.write('I am stream\n');
        res.end();
    },3000);
});

server.listen(8080);