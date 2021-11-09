import {
  Image,
  Box,
  Flex,
  HStack,
  Stack,
  IconButton,
  Menu, 
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { GiShoppingBag } from 'react-icons/gi';
import { HamburgerIcon, CloseIcon, Icon } from '@chakra-ui/icons';
import { useContext } from 'react'
import { cartContext } from '../context/cartContext';



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartIcon, cartList } = useContext(cartContext)
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={5} style={{ maxHeight: "400px", overflowY: "auto", position: "sticky", top: 0, zIndex:999 }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8}>
              <Link exact to={'/'} >
              <Image
              borderRadius="full"
              boxSize={45}
              src="/logo-millfiore.jpeg"
              />
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  exact to={'/categoria/insumosFlores'}>
                  Insumos para Flores</Link>
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  exact to={'/categoria/frisadores'}>
                  Moldes Frisadores de aluminio</Link>
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  exact to={'/categoria/gomasEva'}>
                  Gomas Eva</Link>
            </HStack>
          </HStack>
          <Flex>
            <Menu>
              {cartList.length === 0 ?
              <Link exact to={'/carrito'} >
              <Icon as= {GiShoppingBag} w={7} h={7}/>
              </Link>
              :
              <Link exact to={'/carrito'} >

                <Icon as= {GiShoppingBag} w={7} h={7}
                />
                {cartIcon()}

              </Link>
              }
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link exact to={'/categoria/insumosFlores'}> Insumos para Flores </Link>
            <Link exact to={'/categoria/frisadores'}> Moldes Frisadores de aluminio</Link>
            <Link exact to={'/categoria/gomasEva'}> Gomas Eva </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}