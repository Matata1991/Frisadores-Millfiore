import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from '../servicios/getFirebase';
import { Box, Spinner, Heading } from '@chakra-ui/react';




const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true)

    const [producto, setProducto] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        const BaseDatos = getFirestore()

        BaseDatos.collection('items').where('id', '==', parseInt(id)).get()
        .then((respuesta) => {  
            if(id) {
                respuesta.docs.map(producto => (setProducto({ id: producto.id, ...producto.data() })  ))
                setCargando(false)
            }else {
                setProducto(respuesta)
                setCargando(false)
            }
            })
            .catch(error => console.log(error))
        }, [id]) 
 
    return (
        <>
        {
            cargando ?
            <center>
                <Spinner
                      thickness="4px"
                      speed="0.65s"
                      color="gray.500"
                      size="xl"
                      mt={70}
                />
                <Heading color="gray.500">Cargando</Heading>
              </center>
                     : 
                        <Box
                        ml="37%"
                        pt="2%"
                        >
                            {<ItemDetail key={producto.id} producto={producto}/>}
                        </Box>
        }
        </>
    )
}

export default ItemDetailContainer