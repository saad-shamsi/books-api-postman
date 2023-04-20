import { Book } from "../static/page";

const getBook = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

async function Server() {
  const books = await getBook();
  return (
    <>
      <h1 className="font-bold text-6xl  text-center bg-slate-400 p-6">
        Server data
      </h1>

      {books.map((book: Book) => (
        <div key={book.id}>
          <div className="font-semibold text-2xl py-6 bg-orange-600 ">
            {book.name}
          </div>
          <div className="font-semibold text-2xl py-6 bg-gray-500">
            {book.type}
          </div>
          <div className="font-semibold text-2xl py-6 bg-emerald-600 mb-10">{` InStock: ${
            book.available ? "True" : "False"
          }`}</div>
        </div>
      ))}
    </>
  );
}
export default Server;
