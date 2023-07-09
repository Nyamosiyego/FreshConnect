import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CartContextProvider>
    </>
  );
}
