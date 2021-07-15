import { RoomHandler } from '../Room/RoomHandler';
import { MessageHandler } from '../Message/MessageHandler';



export class  ConnectionHandler {

    private room: any;
    private messeger: any; 


    constructor(io:any, socket: any) {

        console.log(`Novo dispositivo conectado: ${socket.id}`);

        //Define o método newRoom, para ouvir o evento '$newRoom'
        this.newRoom(io, socket);

        //Define o método newMessager, para ouvir os eventos de Mensagem
        this.newMessager(io, socket);
    }   


    
    //Cria uma nova Sala.                                                                                             
    private newRoom(io: any, socket: any): void {

        this.room = new RoomHandler(io, socket);

    }

    //Cria um novo handler de mensagem
    private newMessager(io:any, socket: any){

        this.messeger = new MessageHandler(io, socket);
    }

}