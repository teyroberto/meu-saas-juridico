import { Router } from "express"

export const usuarioRoutes = Router()

usuarioRoutes.get("/", (req, res) => {
  res.json({ message: "Usuários OK" })
})
