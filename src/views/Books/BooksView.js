export default function BooksView({books}) {
  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
