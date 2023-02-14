import "@/styles/globals.scss";
import "react-loading-skeleton/dist/skeleton.css";
import type { AppProps } from "next/app";
import { CategoryProvider } from "@/context/categories";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
    </CategoryProvider>
  );
}
