import { Heading, Box } from "@chakra-ui/react"
import bgImage from "../Resources/ImagenFondoMillfiore.jpg"

const ImagenFondo = () => {
    return (
        <Box 
            h={{ base:"25vh", sm:"35vh" }}
            bgImage={`url(${bgImage})`}
            bgRepeat='no-repeat'
            bgSize='cover'
            >
            <Heading
            p={{ base:"49", sm:"120" }}
            color="gray.200"
            textAlign="center"
            fontSize={{ base:"150%", sm:"220%" }}
            > 
               Bienvenido a Frisadores Mill Fiore
            </Heading>

        </Box>
    )
}

export default ImagenFondo
