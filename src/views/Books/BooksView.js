import {generatePath, Link} from 'react-router-dom';
import {BOOK_DETAIL} from 'config/router/paths';

export default function BooksView({
  books,
  isFetching,
  isPreviousData,
  page,
  onNextPage,
  onPreviousPage,
  totalPages
}) {
  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={generatePath(BOOK_DETAIL, {id: book.id})}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button disabled={page === 1 || isPreviousData} onClick={onPreviousPage}>
          Anterior
        </button>
        <p>Página actual: {page}</p>
        <button disabled={page === totalPages || isPreviousData} onClick={onNextPage}>
          Siguiente
        </button>
      </div>
      {isFetching && <div>Cargando...</div>}
    </div>
  );
}
