import { Link } from 'react-router-dom';
import { Box, Image, Text, Button, Spacer, Center, Tag } from '@chakra-ui/react';
import { FaBookDead, FaLanguage } from "react-icons/fa";

export function BookItem(book){
	return(
		<>
		<Box w='100%' p='4' display='flex' borderWidth='1px' borderRadius='lg'>
			<Image src={book.cover} width='100%' height='auto' maxW='200px' minW='150px' borderRadius='lg'/>

			<Box diplay='flex' p='4' flexDirection='column'>
				<Text as='samp' fontSize='xl'>
					{book.title}
				</Text>
				<Text color='teal'>
					{book.publisher_date}
				</Text>
				<Link to={'/book/'+ book.ID}>
				<Button colorScheme='yellow' w='100px' mt='4'> Details</Button>
				</Link>
			</Box>
			<Spacer />
			<Box diplay='flex' p='6' mr='20' flexDirection='column'>
				<Center><FaBookDead /> <Tag m='1' p='2' colorScheme='orange' fontSize='sm'>{book.pages}</Tag></Center>
				<Center><FaLanguage /><Text m='1' p='2'>{book.language}</Text></Center>
			</Box>
		</Box>
		   
		</>
		 /**
		  * <>
		  * <li>{book.title}({book.publisher_date})<br></br>
			 {book.pages}-{book.language}<br></br>
				<Link to={'/book/' + book.ID}>
					<Button colorScheme='blue' w='100px' mt='4'>Details</Button>
				</Link>
			 <img src={book.cover} width='100px'/>
		 </li>
		 </>
		 **/
	)
}