
let id = Math.floor(Math.random()*10+1)
let title = Math.floor(Math.random()*10+1)
let price =Math.floor(Math.random()*9999.99+0.00).toFixed(2)
let thumbnail = Math.floor(Math.random()*10+1)

let object = JSON.stringify([
    { 
        id,
        title: `Producto ${title}`,
        price,
        thumbnail: `Foto ${thumbnail}`
    }
])

const http= require('http');
const server = http.createServer((req, res)=>{//Peticion y respuesta
  
   res.end(object)
 
})
server.listen(8080, ()=>{
    console.log("Listening on port 8080")
})