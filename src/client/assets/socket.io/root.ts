import { Socket_Class } from "./_socket";

export class RootSocket_Class {
    /********** properties **********/
    io = new Socket_Class().io;
    name: string = "root";

    /********** handlers **********/
    /*
     *	1 emit : connect
     *	2 emit : clientsCount
     */
    connect() {
        console.log(`emit : ${this.name}-connect_room`);
        this.io.emit(`${this.name}-connect_room`, { data: this.name });
    }
    clientsCount() {
        console.log(`${this.name}-clientsCount`);
        this.io.emit(`${this.name}-clientsCount`, { data: this.name });
    }

    /********** serve emit **********/
    /*
     *	1 on : disconnect
     *	2 on : clientsCount
     */
    on() {
        //	1 on : disconnect
        this.io.on("disconnect", () => {
            console.log("disconnec");
        });
        //	2 on : clientsCount
        this.io.on(`${this.name}-clientsCount`, (data: any) => {
            console.log("clientsCount");
            console.log("data", data);
        });
    }
}
