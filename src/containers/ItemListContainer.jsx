import { useState, useEffect }  from 'react'
import ItemList from '../components/ItemList';
import { getFirestore } from '../servicios/getFirebase';
import { Spinner, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom";

function ItemListContainer() {
    
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { idCategoria } = useParams()

    useEffect(() => {
      setCargando(true)
      if (idCategoria) {
        const BaseDatos = getFirestore()
  
        BaseDatos.collection('items').where('categoria', '==', idCategoria).get()
        .then(respuesta => {
          setProductos(respuesta.docs.map(producto => ( { id: producto.id, ...producto.data() } )))
        })
        .catch(error => console.log(error))
        .finally(() => setCargando(false))
        } else {
          const BaseDatos = getFirestore()
  
          BaseDatos.collection('items').get()
          .then(respuesta => {
            setProductos(respuesta.docs.map(producto => ( { id: producto.id, ...producto.data() } )))
          })
          .catch(error => console.log(error))
          .finally(() => setCargando(false))
        }
      }
      , [idCategoria])
     
    return (
        <>
            {cargando ? 
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
                     : <ItemList productos={productos} />}
        </>
      )
}
export default ItemListContainer