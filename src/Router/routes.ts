import { ConnectionHandler } from "../handlers/Connection/ConnectionHandler";

let conection: any;


export class Router {

    constructor() {

    }

    //Sempre que uma nova conexão é criada, cria um objeto do tipo connectionHandler e define seus eventos.
    public Connect(io: any, socket: any): void {

        conection = new ConnectionHandler(io, socket);
    }

}