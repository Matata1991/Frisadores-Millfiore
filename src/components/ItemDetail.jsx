import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Text
  } from '@chakra-ui/react';
  import { cartContext } from '../context/cartContext';
  import { useContext } from 'react';
  import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => { 


    const { añadirAlCarrito } = useContext(cartContext)    

    const onAdd = (cant) => {
    añadirAlCarrito({item: producto, cantidad: cant })
    }

    return(
        <Flex
          p={5}
          w={{ base:"80%", sm:"70%" }}
        >
          <Box
            bg={useColorModeValue('gray.300', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">
    
            
            <Image
              src={producto.imagen}
              alt={`Picture of ${producto.nombre}`}
              roundedTop="lg"
              
            />
    
            <Box p="5">
                <Box>
                  { producto.titulo }
                </Box>
              <Flex justifyContent="space-between">
                <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                  Precio: ${producto.precio}
                </Box>
              </Flex>
                <Text
                fontSize={{ base:"sm", sm:"1xl" }}
                >
                  { producto.descripcion }
                </Text>
            </Box>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>  
          </Box>
    
        </Flex>
      );
}

export default ItemDetail