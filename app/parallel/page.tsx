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
const fictionBooks = getfiction();
const nonFictionBooks = getNonfiction();
async function ParallelFettcing() {
  const [fiction, nonFiction] = await Promise.all([
    fictionBooks,
    nonFictionBooks,
  ]);
  return (
    <div>
      <h2 className="font-bold text-6xl  text-center bg-slate-400 p-6">
        Fiction Books
      </h2>
      <div>
        <ul className="text-center ">
          {fiction.map((book: Book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
      <h2 className="font-bold text-6xl  text-center bg-slate-400 p-6">
        NonFiction Books
      </h2>
      <div
        className="text-center
      "
      >
        <ul>
          {nonFiction.map((book: Book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ParallelFettcing;
