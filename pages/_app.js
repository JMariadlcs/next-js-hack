import '../styles/globals.css'
import Header from "../components/Header"; // to use Moralis tools
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
  
  <MoralisProvider initializeOnMount = {false}>
    <Header>
      <Component {...pageProps} />
    </Header>
  </MoralisProvider>
  
  );
}

export default MyApp
