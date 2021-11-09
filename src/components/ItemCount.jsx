import {useState} from 'react'
import { Button, Text, Center, Icon } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(true);


    function suma() {
        if(count < 5){
            setCount(count + 1) 
        }
    }
    function resta() {
        if(count > 0){
            setCount(count - 1) 
        }
    }
    function agregarAlCarrito(){
        if(count > 0){
            onAdd(count)
            setCambiarBoton(false)
        }
    }
    return (
        <div>
                <Center><Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} /> <Text ml={5}> { count }</Text></Center>
                <Center>
                <Button onClick={resta} variant="outline">-</Button>
                    { cambiarBoton ? 
                <Button onClick={agregarAlCarrito} variant="outline">Agregar Carrito</Button>

                    :
                    <Center>
                    <Link to={ '/carrito' }>
                        <Button variant="outline">Finalizar Compra</Button>                    
                    </Link>
                    </Center>
                }
                <Button onClick={suma} variant="outline">+</Button>
                </Center>
        </div>
    )
}

export default ItemCount