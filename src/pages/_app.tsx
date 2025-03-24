import Footer from "@/components/main/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-clip w-screen h-screen overflow-y-scroll">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
