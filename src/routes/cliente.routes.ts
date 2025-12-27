import { Router } from "express"

export const clienteRoutes = Router()

clienteRoutes.get("/", (req, res) => {
  res.json({ message: "Clientes OK" })
})
