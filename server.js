const http=require('http')
const app=require('./app.js')
const PORT=process.env.PORT || 9000;

const server=http.createServer(app)
server.listen(PORT,()=>{
    console.log("server in...")
})
