import { Request, Response } from "express"
import { prisma } from "../prisma"

export class UsuarioController {
  async criar(req: Request, res: Response) {
    const { nome, email, senha } = req.body

    const usuario = await prisma.usuario.create({
      data: { nome, email, senha },
    })

    return res.status(201).json(usuario)
  }

  async listar(req: Request, res: Response) {
    const usuarios = await prisma.usuario.findMany()
    return res.json(usuarios)
  }
}
