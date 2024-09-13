import "@/app/styles/globals.scss";
import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Typescript Tutorial by Jakub B.",
  description: "Boost your application security with Typescript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
