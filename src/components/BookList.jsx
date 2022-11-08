import { useEffect, useState } from 'react'
import * as API from '../service/data';
import { BookItem } from './BookItem';
import { Flex, Center, Image, Spacer, Box } from '@chakra-ui/react';
import loading from '../assets/loading.gif';

export function BookList(){
	const [books, setBooks] = useState([]);
	useEffect(()=>{
	    API.getBooks().then(setBooks);
	  })
	return(
		<>
		{books.length == 0 ?(
			<Flex mb='2' justify="center" direction='column'>
				<Box align="center" >
					<Image src={loading} />
				</Box>
				<Box w='100%' align="center" >Loading...</Box>
			</Flex>
		):(
			<section>
				<Flex direction='column'>
				{
				   //con map recorres un array
				   books.map(book => (
				   <BookItem key={book.ID} {...book} />
				    ))
				  }
				</Flex>
			</section>
			)}
			

		</>
		)
}
