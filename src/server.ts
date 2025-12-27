import express from "express"
import cors from "cors"
import { usuarioRoutes } from "./routes/usuario.routes"
import { clienteRoutes } from "./routes/cliente.routes"
import { processoRoutes } from "./routes/processo.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/usuarios", usuarioRoutes)
app.use("/clientes", clienteRoutes)
app.use("/processos", processoRoutes)

app.get("/", (_, res) => {
  res.send("API SaaS Jurídico rodando ⚖️")
})

app.listen(3333, () => {
  console.log("🚀 Servidor rodando em http://localhost:3333")
})
