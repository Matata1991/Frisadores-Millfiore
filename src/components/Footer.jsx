import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
        bg={useColorModeValue('gray.200', 'gray.900')}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}
          >
            <Image
            borderRadius="full"
            boxSize={45}
            src="/logo-millfiore.jpeg"
            />
          <Text>© All rights reserved</Text>
        </Container>
      </Box>
    )
}

export default Footer
