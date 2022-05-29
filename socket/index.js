const app = require('express')()

const server = require('http').createServer(app)

const io = require('socket.io')(server,{
  cors: {
    origin: "*"
  }
})

const users = {}

io.on('connection', (Socket) =>{
  Socket.on('create-connection', () =>{
    console.log("socket connect succesfull")
  })

  Socket.on('place-order', (payload) =>{
    Socket.broadcast.emit('receive-order', payload)
  })

  Socket.on("disconnect", () => {
    Socket.broadcast.emit('leave', {name:users[Socket.id], message:"has leave the chat"})
  });

})

server.listen(5501, () => console.log("server is running..."))