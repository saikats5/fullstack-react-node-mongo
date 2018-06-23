import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';

const server = express();

/* server.get('/', (req, res)=>{
    res.send('Hello Express');
}); */

server.set('view engine', 'ejs');
server.get('/', (req, res)=>{
    res.render('index',{
        content: "Hello EJS"
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

/* server.get('/about.html', (req, res)=>{
    fs.readFile('./about.html', (err, data)=>{
        res.send(data.toString());
    });
}); */

server.listen(config.port, ()=>{
    console.log();
});