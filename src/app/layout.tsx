import "./globals.css";
import Header from "../components/Header";
import "swiper/swiper-bundle.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
