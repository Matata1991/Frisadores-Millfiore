import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { Link } from "react-router-dom";


function Item({producto}) {


  return (
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
        </Box>
        <Link exact to={`/detalle/${producto.id}`} >
          <center>
            <Button colorScheme="blue">Detalle</Button>
          </center>
        </Link> 
      </Box>

    </Flex>
  );
}

export default Item;