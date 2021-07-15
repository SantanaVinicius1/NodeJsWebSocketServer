

export class MessageListeners {

    constructor() {

    }

    public CreateListeners(io:any, socket:any) {
        
        this.update(io,socket);

        this.slide(io, socket);

    }


    //Metodo executado com o evento update
    public update(io:any, socket:any) {

        socket.on('update', (data: any)=> {
            
            io.to(data.roomName).emit('updateValueChange', data.message);

        })
    }

    //Metodo executado com o evento mSlider
    private slide(io, socket: any) {

        socket.on('mSlider', (data: any) => {
    
            io.to(data.roomName).emit('sliderValueChange', data.message);
        })

    }



}