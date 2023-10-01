import Header from "@/components/Header";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <div className="relative">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
