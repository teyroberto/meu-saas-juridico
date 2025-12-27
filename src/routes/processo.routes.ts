import { Router } from "express"

export const processoRoutes = Router()

processoRoutes.get("/", (req, res) => {
  res.json({ message: "Processos OK" })
})
