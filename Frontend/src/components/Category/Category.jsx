import Book from '../Book/Book';
// import background from '/src/assets/imagens/fundo.png';
import hexToRgba from 'hex-to-rgba';
import './Category.css';

const Category = ({ category, book = [], deleteBook, changeColorCategory, toggleFavorite }) => {

  const filteredBooks = book.filter(
    (book) => book.category === category.name
  );

  return (
    filteredBooks.length > 0 && (
      <section
      
        className="category"
        style={{
          backgroundImage: `url()`,
          backgroundColor: hexToRgba(category.color, '0.5'),
          paddingBottom: '3rem',
        }}
      >
        
        {/* Input para alterar a cor do categoria */}
        <input
          value={category.color}
          type="color"
          className="input-color"
          onChange={(event) => changeColorCategory(event.target.value, category.id)}
        />
        
        <h3 style={{ borderColor: category.color }}>{category.name}</h3>
        <div className="category-books">
          
          {/* Mapeia e renderiza os livros da categoria */}
          {filteredBooks.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              name={book.name}
              image={book.image}
              alt={`Imagem de ${book.name}`}
              description={book.description}
              colorBackgroud={category.color}
              deleteBook={deleteBook}
              toggleFavorite={toggleFavorite}
              favorite={book.favorite}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Category;