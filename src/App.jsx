import { BookList } from './components/BookList';
import { BookDetail } from './components/BookDetail';
import { BookSearchList } from './components/BookSearchList';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export function App() {
  
  return (
    //tiene que haber un único div
    //<div>
    // <h1>Hola Mundo!</h1>
    //</div>
    //si no la otra forma es asi
    //<>
    //<div><h1>Hola Mundo!</h1></div>
    //<div><h1>Hola Mundo 2!</h1></div>
    //<Componente/>
    //</>
    //en jsx todas la etiquetas se cierrán

    //sacas un json entero
    //<>
    //{JSON.stringify(books)}
    //</>
    //<BookList/>

    <>
      <Header />

      <Box ml='15%' mr='15%' mt='50px'>
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='book/:bookId' element={<BookDetail />} />
          <Route path='search/:word' element={<BookSearchList />} />
        </Routes>
      </Box>
      
    </>
    
  )
}


