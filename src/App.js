import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import { useColorModeValue, Box } from "@chakra-ui/react"
import Footer from "./components/Footer";
import { createContext } from "react";
import CartContextProvider from "./context/cartContext";
import Cart from "./components/Cart";
import ItemDetailContainer from "./containers/ItemDetailContainer";


export const ContextApp = createContext()

function App() {

  return (
      <>
        <CartContextProvider>
          <ContextApp.Provider>  
            <BrowserRouter>
              <Navbar/> 
              <Box bg={useColorModeValue('gray.200', 'gray.900')}>
                  <Switch>
                    <Route exact path='/' component={ItemListContainer} />
                    <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
                    <Route exact path='/carrito' component={Cart}/>
                    <Route exact path='/detalle/:id' component={ItemDetailContainer} />
                  </Switch>   
              </Box>
              <Footer />
            </BrowserRouter>
          </ContextApp.Provider>
        </CartContextProvider>
      </> 
  );
}

export default App;
