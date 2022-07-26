import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SidebarProvider } from "context/SidebarContext";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Sidebar } from "components/Sidebar";
import store from "store";
import "styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SidebarProvider>
        <Header />
        <Sidebar />
        <Component {...pageProps} />
        <Footer />
      </SidebarProvider>
    </Provider>
  );
}

export default MyApp;
