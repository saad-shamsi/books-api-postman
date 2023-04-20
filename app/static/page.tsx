type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = response.json();
  return data;
}
const Static = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div>
      {books.map((book: Book) => (
        <ul key={book.id}>
          <ul>{`${book.name} - ${book.type} - Available ${book.available}`}</ul>
        </ul>
      ))}
    </div>
  );
};
export default Static;
