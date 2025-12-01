// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HolidaySwitcher from "../components/HolidaySwitcher";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <div className="container mx-auto p-6">
          <HolidaySwitcher />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

