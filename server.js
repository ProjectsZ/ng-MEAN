const app  = require('./backend/app');
const http = require('http');

const port = process.env.PORT || 4300;

app.set('port', port);
// const server = http.createServer((req, res)=>{
//                                 res.end('Iniciando la primnera response');
//                               });
const server = http.createServer(app);

// server.listen(process.env.PORT || 4300);
server.listen(port);
