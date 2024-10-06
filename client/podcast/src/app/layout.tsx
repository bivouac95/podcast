export const metadata = {
  title: "Podcast | bivouac95",
  description: "Listen a podcast your own way!",
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import Provider from "./Provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
        </body>
    </html>
  );
}
