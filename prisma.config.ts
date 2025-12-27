import "dotenv/config";  // Carrega as variáveis do .env automaticamente
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",  // Caminho para o seu schema (ajuste se necessário)
  datasource: {
    url: env("DATABASE_URL"),
  },
});