import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  
})

async function main() {
  console.log('🌱 Iniciando seed...')
  
  // Limpeza opcional (evita duplicados ao rodar várias vezes)
  await prisma.cliente.deleteMany()
  await prisma.usuario.deleteMany()

  // 1. Cria o usuário admin
  const usuario = await prisma.usuario.create({
    data: {
      nome: "Admin",
      email: "admin@sistema.com",
      senha: "123"
    }
  })

  // 2. Cria o cliente vinculado
  const cliente = await prisma.cliente.create({
    data: {
      nome: 'João Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      usuarioId: usuario.id
    },
  })

  console.log(`✅ Seed finalizado! Cliente criado: ${cliente.nome}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })