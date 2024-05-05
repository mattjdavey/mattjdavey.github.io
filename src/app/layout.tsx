
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className={`h-full ${inter.className}`}>
        <Navigation />
        <div className="min-h-full">
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
