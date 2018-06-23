import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

const server = express();

/* server.get('/', (req, res)=>{
    res.send('Hello Express');
}); */

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

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