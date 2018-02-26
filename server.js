const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

let users = []
let connections = []

server.listen(process.env.port || 3000)
console.log('server running')
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})
// io.sockets.on('connection',socket => {
//   connections.push(socket)
//   console.log('socket connected', connections.length)
//   //disconnect
//   socket.on('disconnect', data => {
//     users.splice(users.indexOf(socket.userName), 1)
//     updateUserNames()
//     connections.splice(connections.indexOf(socket), 1)
//     console.log('disconnected', connections.length)
//   })
//   //send message
//   socket.on('send message',data => {
//     console.log(data)
//     io.sockets.emit('new message', {msg : data})
//   })
//   //New User
//   socket.on('new user', (data,callback)=> {
//     callback(true)
//     socket.userName = data
//     users.push(socket.userName)
//     updateUserNames()
//   })
//   function updateUserNames(){
//     io.sockets.emit('get users', users)
//   }
// })
