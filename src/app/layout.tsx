
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>

      <body className={`h-full bg-gray-100 dark:bg-slate-800 ${inter.className}`}>
      <Providers>
        <Navigation />
        <div className="min-h-full">
          <main>
            <div className="mx-auto max-w-7xl py-6 px-6 md:px-6 sm:px-6 lg:px-8">
                {children}
            </div>
          </main>
        </div>
        </Providers>
      </body>
    </html>
  );
}
