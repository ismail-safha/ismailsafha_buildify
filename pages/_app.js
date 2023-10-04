import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative container mx-auto px-16">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
