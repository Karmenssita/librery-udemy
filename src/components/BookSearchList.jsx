import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import loading from '../assets/loading.gif';
import { Heading, Center, Image, Flex, Box } from '@chakra-ui/react';
import { BookItem } from './BookItem';
import * as API from '../service/data';

export function BookSearchList(){

	let params =useParams();

	const [books, setBooks]= useState([]);

	useEffect(()=> {
		API.getBookSearch(params.word).then(setBooks);
	},[books]);


	return(
		<>
		<Heading as='h1' size='xl'>Resultados de la búsqueda de: {params.word} </Heading>
		{!books[0]?(
			<Flex mb='2' justify="center" direction='column'>
				<Box align="center" >
					<Image src={loading} />
				</Box>
				<Box w='100%' align="center" >Loading...</Box>
			</Flex>
			):(
			<section>
				<Flex direction='column'>
					{books.map(book =>
						<BookItem key={book.ID}{...book}/>
						)}

				</Flex>
			</section>
			)}
		
		</>
		)
}