import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Meu SaaS Jurídico",
  description: "Sistema jurídico com IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          

          {/* MENU LATERAL */}
          <aside className="w-64 bg-gray-900 text-white p-6">
            <h1 className="text-xl font-bold mb-6">
              ⚖️ SaaS Jurídico
            </h1>

            <nav className="space-y-4">
              <Link href="/" className="block hover:text-blue-300">
                🏠 Início
              </Link>
              <Link href="/processos" className="block hover:text-blue-300">
                📂 Processos
              </Link>
              <Link href="/clientes" className="block hover:text-blue-300">
                👥 Clientes
              </Link>
              <Link href="/ia" className="block hover:text-blue-300">
                🤖 IA Jurídica
              </Link>
              <Link href="/configuracoes" className="block hover:text-blue-300">
                ⚙️ Configurações
              </Link>
            </nav>
          </aside>

          {/* CONTEÚDO */}
          <main className="flex-1 p-8">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
