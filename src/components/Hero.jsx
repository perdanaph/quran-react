import { Container, Stack, Text, Box } from '@chakra-ui/react';
import Search from './Search';
import Quran from '../assets/icons/Quran';

export default function Hero({ handler }) {
  return (
    <>
      <Container p={{ base: 8, sm: 14 }} className='mt-5'>
        <Stack direction='column' spacing={6} alignItems='center'>
          <Box py={4} px={6} bg='teal' w='max-content' color='white' rounded='md' fontSize='sm'>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <Text fontWeight='bold'>Al-Quran DIGITAL</Text>
            </Stack>
          </Box>
          <Quran />
          <Text maxW='550px' fontSize='xl' textAlign='center' color='gray.500'>
            Welcome to Al-Quran Digital
          </Text>
        </Stack>
        <Search handler={handler} />
      </Container>
    </>
  );
}
