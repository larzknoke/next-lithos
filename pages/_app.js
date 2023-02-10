import "../styles/globals.css";
import { SidebarProvider } from "../context/SidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}

export default MyApp;
