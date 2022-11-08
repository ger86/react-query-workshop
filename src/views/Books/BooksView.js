export default function BooksView({books, page, onNextPage, onPreviousPage, totalPages}) {
  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <div>
        <button disabled={page === 1} onClick={onPreviousPage}>
          Anterior
        </button>
        <p>Página actual: {page}</p>
        <button disabled={page === totalPages} onClick={onNextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
