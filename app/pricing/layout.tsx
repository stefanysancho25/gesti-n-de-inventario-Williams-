import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tecnología de Williams",
  description: "Sistema centralizado de inventarios y ventas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
