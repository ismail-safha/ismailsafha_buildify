import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="relative ">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
