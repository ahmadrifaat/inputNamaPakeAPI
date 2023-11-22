import Navbar from "@components/navbar/navbar.js";
import "@style/globals.css";

export const metadata = {
  title: "Faat Button",
  description: "Tugas Input Nama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
