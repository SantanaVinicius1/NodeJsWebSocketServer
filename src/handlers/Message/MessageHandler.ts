import { MessageListeners } from "./MessageListeners";

export class MessageHandler {

    constructor(io:any, socket:any) {

        const messagerListener = new MessageListeners();

        messagerListener.CreateListeners(io, socket);

    }

}