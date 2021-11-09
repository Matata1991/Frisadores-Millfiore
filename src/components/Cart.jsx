import { useContext, useState  } from 'react'
import { Button, Image, Box, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { cartContext } from '../context/cartContext';
import { getFirestore } from '../servicios/getFirebase';
import firebase from 'firebase/compat/app';

const Cart = () => {

const [ formData, setFormData ] = useState({
                                                name: '',
                                                tel: '',
                                                email: '',
                                                email2: ''
                                            })
const { cartList, totalPrecios, eliminarDelCarrito, vaciarCarrito } = useContext(cartContext)

function handleOnChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        }) 
    }
const handleOnSubmit = (e) => {
    e.preventDefault()

    if(formData.email !== formData.email2){
        alert('Los mails ingresados no coinciden entre si') 
    } else {
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
    
        orden.buyer = formData
    
        orden.total = totalPrecios()
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.titulo;
            const price = cartItem.item.precio * cartItem.cantidad;
            
            return {id, title, price}   
        })
    
        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(resp => alert('Gracias por tu compra !! Tu id de compra es: ' +  resp.id))
        .catch(err=> console.log(err))
        .finally(()=>
        setFormData({
            name: '',
            tel: '',
            email: '',
            email2:''
        })
        )
        .finally(()=>
        vaciarCarrito()
        )
    }
}


    const CarritoVacio=  
                           
                        <center>
                        <Box pt={50}>
                            El carrito se encuentra vacio!
                        <Box
                        >  
                        <Link to='/'>
                            <Button colorScheme="green" mt={10}>Ir a comprar!!</Button>
                        </Link> 
                        </Box>
                        </Box>
                        </center>   

    if (cartList.length === 0) return CarritoVacio;

    return (
        <>
        <div>
            <center>
            { cartList.map(item => 
            <Box pt={5}>
                <Image      
                borderRadius="full"
                boxSize="100px"
                src={item.item.imagen}
                />
                <br/> 
                Producto: {item.item.titulo}<br/> 
                Descripcion: {item.item.descripcion}<br/>
                Precio: {item.item.precio}<br/>
                Cantidad: {item.cantidad}<br/>
                <Button  onClick={() => {eliminarDelCarrito(item)}} colorScheme="red" mt={3}>Eliminar item</Button>
            </Box>)
            }
            <Heading as="h4" size="md" mt={5}>Precio total: {totalPrecios()}</Heading>
            <Button colorScheme="red" mt={3} onClick={() => vaciarCarrito() }>Vaciar Carrito</Button>
            </center>
            <center>
            <Box
            mt={5}
            >
                 <form 
                    onSubmit={handleOnSubmit}
                    onChange={handleOnChange}
                >   
                    <FormControl id="name"
                    w="50%"
                    isRequired
                    >  
                    <FormLabel>Ingrese su nombre</FormLabel>
                    <Input
                        type='text' 
                        placeholder='Ingrese su nombre' 
                        name='name'
                        value={formData.name} 
                    />
                    </FormControl>
                    <FormControl id="tel"
                    w="50%"
                    isRequired
                    >    
                    <FormLabel>Ingrese su nro de telefono</FormLabel>
                    <Input 
                        type='number' 
                        placeholder='Ingrese el nro de tel' 
                        name='tel' 
                        value={formData.tel}
                    />  
                    </FormControl>
                    <FormControl id="email"
                    w="50%"
                    isRequired
                    >    
                    <FormLabel>Ingrese su email</FormLabel>
                    <Input 
                        type='email' 
                        placeholder='Ingrese su email' 
                        name='email' 
                        value={formData.email}    
                    />  
                    </FormControl>
                    <FormControl id="email2"
                    w="50%"
                    isRequired
                    >    
                    <FormLabel>Confirme su email</FormLabel>
                    <Input 
                        type='email'  
                        placeholder='Confirme su email' 
                        name='email2' 
                        value={formData.email2}  
                    />  
                    </FormControl> 
                       <Button colorScheme="teal" variant="solid" mt={10}>
                       <button>
                           Terminar Compra
                       </button>
                       </Button>        
                </form>
            </Box>
            </center>
        </div>
        </>
    )
}

export default Cart