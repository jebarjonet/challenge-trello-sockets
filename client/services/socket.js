import io from 'socket.io-client'

class Socket {
    constructor() {
        this.socket = io()
    }

    emit = (event, data) => {
        return this.socket.emit(event, data)
    }

    on = (event, data) => {
        return this.socket.on(event, data)
    }
}

export default new Socket()
