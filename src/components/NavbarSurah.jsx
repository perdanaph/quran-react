import { Box, Flex, Stack, Popover, PopoverTrigger, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
export default function NavbarBack() {
  const navigate = useNavigate();
  return (
    <Box className='fixed top-0 left-0 right-0 z-50'>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Flex>
            <Stack direction={'row'} spacing={4}>
              <Box>
                <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                    <a className={'text-teal-500 cursor-pointer flex justify-center items-center'} onClick={() => navigate(-1)}>
                      <ArrowBackIcon /> Back
                    </a>
                  </PopoverTrigger>
                </Popover>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
