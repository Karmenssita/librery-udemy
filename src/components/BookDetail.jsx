import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../service/data';
import { Box, Flex, Center, Image, Text, Spacer } from '@chakra-ui/react';
import loading from '../assets/loading.gif';


export function BookDetail(id){

	let params = useParams();

	const [book, setBook] = useState([]);

	useEffect(()=> {
		API.getBookDetail(params.bookId).then(setBook);
	},[book]);

	return(
	
		
		<Box mt='50'>
			<Box mt="6" borderRadius='lg' borderWidth='1px' p='6'>
				{!book[0]?(
						<Flex mb='2' justify="center" direction='column'>
							<Box align="center" >
								<Image src={loading} />
							</Box>
							<Box w='100%' align="center" >Loading...</Box>
						</Flex>
					):(
					<>
						<Flex mb='2'>
							<Box w='20%' color='gray.400'>Title:</Box>
							<Box w='80%'>{book[0].title}</Box>
						</Flex>
						<Flex mb='2'>
							<Box w='20%' color='gray.400'>Autor:</Box>
							<Box w='80%'>{book[0].author}</Box>
						</Flex>
						<Flex mb='2'>
							<Box w='20%' color='gray.400'>Publicado por:</Box>
							<Box w='80%'>{book[0].publisher}</Box>
						</Flex>

						<Flex mb='2'>
							<Box w='20%' color='gray.400'>Categoria:</Box>
							<Box w='80%'>{book[0].categories.map(categorie =>(
								categorie.name+ " "
								))}</Box>
						</Flex>
						<Flex mb='2'>
							<Box w='20%' color='gray.400'>Link:</Box>
							<Box w='80%'><a href={book[0].url_download} target='_blank'>{book[0].url_download}</a></Box>
						</Flex>
							
						<Center>
							<Image src={book[0].cover} w='300px' borderRadius='lg' mt='6'/>
						</Center>

					</>


			)}

			</Box>
		</Box>

	
			
		
			
		)

}
