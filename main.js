const express = require("express")

const app = express()

const contenedor = require("./Contenedor")

const PORT = 8080


app.get("/productos", async(req, res)=>{
    const todosProductos =  await contenedor.getAll()
    res.json(todosProductos)
})

app.get("/productoRandom", async(req, res)=>{
    const todosProductos =  await contenedor.getAll()
    const maximoId = todosProductos.length

    const numRandom = generadorRandom(1 , maximoId)
    const productoRandom = await contenedor.getById(numRandom)
    res.send(productoRandom)
})

const generadorRandom = (min, max) =>{
    return Math.floor((Math.random() * (max + 1 - min)) + min)
}


app.get("*", (req,res)=>{
    res.send("sin contenido")
})

const server = app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
} )

server.on("error", error => console.log(`Error en servidor ${error}`))


