import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Provider store={store}>
          <Header />
          <main className="flex-grow pt-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
