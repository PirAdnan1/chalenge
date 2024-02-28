import "@/styles/globals.css";

// context
import MyProvider from "@/contents/context/ProductContext";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
