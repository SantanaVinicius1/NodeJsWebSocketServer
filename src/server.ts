import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import { Router } from '../src/Router/routes';

const router = new Router();

//Inicializa o express
const app = express();

// Atribui o express à um servidor HTTP
const server = http.createServer(app);

// Cria um novo servidor  WebSocket usando o servidor HTTP
const webSocketServer = new socketio.Server(server, {

    //Define a politica de CORS
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});


// Define o Evento de Conexão de um novo Socket
webSocketServer.on('connection', (socket) => {
    
    //Cria um objeto de conexão;
    // router.connect manipula uma nova conexão.
    router.Connect(webSocketServer, socket);
   
});

//Inicializa o Server
server.listen(process.env.PORT || 3000, () =>{
    console.log('Rodando na porta %s', server.address());
})