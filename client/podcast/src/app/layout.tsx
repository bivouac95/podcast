export const metadata = {
  title: "Podcast | bivouac95",
  description: "Listen a podcast your own way!",
};

import Header from "../components/Header";
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
        </Provider>
      </body>
    </html>
  );
}
