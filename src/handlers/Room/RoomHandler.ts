export class  RoomHandler {

    private io: any;
    private socket: any;

    constructor( io:any, socket:any ) {

        this.socket = socket;
        this.io = io;

        this.connectToRoom();

        this. disconnectToRoom();

    }


    private connectToRoom(): void {

        
        this.socket.on('connectRoom', (data: any)=>{

            this.socket.join(data.roomName);
            console.log(`${this.socket.id} Entrou na sala ${data.roomName}`)
           
            this.socket.emit('conectadoSala', data.roomName);
        });
    }


    private disconnectToRoom(): void {
       
        this.socket.on('disconnectRoom', (data: any) => {
            this.socket.leave(data.roomName);
    
            console.log(`${this.socket.id} Saiu na sala ${data.roomName}`);
    
            this.socket.emit('desconectadoSala', `${this.socket.id} Saiu na sala ${data.roomName}`);
          
        });

    }

}

