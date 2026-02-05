import express from "express"
import { getEnvironmentData } from "node:worker_threads"

const app = express()

app.use (express.json())

const musicas = [
    {
        id: 12,
        titulo: "Chicago",
        artista: "Michael Jackson",
        genero: "pop",
        ano_publicacao: 1999
    }
]

function buscarMusica(id){
    return musicas.findIndex(m => {
        return m.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("CRUD Músicas")
})

export default app

