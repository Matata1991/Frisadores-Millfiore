import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme.ts'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

