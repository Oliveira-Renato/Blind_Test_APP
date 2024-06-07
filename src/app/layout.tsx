import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "manifest.json",
  title: "Blin Test App",
  description: "Aplicação para Teste Cego",
};

export const viewport: Viewport = {
  themeColor: "#8936FF"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {/* Back to home */}
          <div className="z-10 w-full max-w-5xl items-center justify-start font-mono text-sm lg:flex pl-4">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
              <Link
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="/"
              >
                BLIND TEST APP
              </Link>
            </div>
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
