import logo from '../assets/openlibra-logo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Flex, Spacer, Image, Input, InputGroup, InputRightElement,Box } from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";

export function Header(){
	const [word, setWord]= useState([]);

	return(
	<>
		<Flex
		w='100%'
		h='70px'
		p='6px'
		align='center'
		justify='flex-start'
		bgColor='#000'
		color='white'
		>
			<Link to={'/'}>
				<Image src={logo} w="150px"/>
			</Link>
			<Box w='500px'>
				  <InputGroup>
				    <Input 
				    	size='sm' 
				   		ml='10' 
				   		bgColor='white' 
				   		color='black' 
				   		onChange={event => setWord(event.target.value)}
				   	/>
				
				     <InputRightElement 
				     	children={
					     	<Link to={'/search/' +word} >
					     		<FaSearch color='black' cursor='pointer'/>
					     	</Link>
				     	} 
				     />
				  </InputGroup>
			</Box>
		</Flex>
	</>
	)
}