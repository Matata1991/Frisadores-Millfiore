import { SimpleGrid, Center, useMediaQuery } from '@chakra-ui/react';
import Item from './Item'
import ImagenFondo from "../components/ImagenFondo"


const ItemList = ({ productos }) => {
  
const [isLargerThan1280] = useMediaQuery("(min-width: 750px)")
  
  return (
    <>
      <ImagenFondo />
      <Center>
        
        {
          isLargerThan1280 ?

          <SimpleGrid columns={{sm: 3, md: 3}} spacing="40px">         
            { productos.map(producto => <Item producto={producto}/>) }         
          </SimpleGrid>
        :
          <SimpleGrid columns={{sm: 3, md: 3}} spacing="40px">         
              <center>{ productos.map(producto => <Item producto={producto}/>) }</center>     
          </SimpleGrid>
        }
        
      </Center>
    </>
  )
}
 
export default ItemList