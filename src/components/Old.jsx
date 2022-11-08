BookDetail

/**{!book[0]?(<div>Loading...</div>):(
			<div>
				<p>Titulo: {book[0].title}</p>
				<p>Autor: {book[0].author}</p>
				<p>Publicado por: {book[0].publisher}</p>
				<p>Categories: {book[0].categories.map(categorie =>(
					categorie.name+ " "
					))}</p>
				<img src={book[0].cover} />
			</div>
			)}**/