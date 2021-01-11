import socketIo from "socket.io-client";

const io = socketIo("http://localhost:3000", { path: "/test" });

export class Socket_Class {
    /********** properties **********/
    io = io;
}
