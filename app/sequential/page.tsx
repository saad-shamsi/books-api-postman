import { Book } from "../static/page";

const getfiction = async () => {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    { cache: "no-store" }
  );
  const data = response.json();
  return data;
};
const getNonfiction = async () => {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    { cache: "no-store" }
  );
  const data = response.json();
  return data;
};

async function sequentialFetcing() {
  const fictionBooks = await getfiction();
  const nonFictionBooks = await getNonfiction();
  return (
    <div>
      <h2 className="font-bold text-6xl  text-center bg-red-400 p-6">
        Fiction Books
      </h2>
      <div>
        <ul className="text-center ">
          {fictionBooks.map((book: Book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
      <h2 className="font-bold text-6xl  text-center bg-red-400 p-6">
        NonFiction Books
      </h2>
      <div
        className="text-center
      "
      >
        <ol>
          {nonFictionBooks.map((book: Book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default sequentialFetcing;
