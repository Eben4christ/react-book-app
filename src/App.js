import {books} from "./books"
import Book from "./Book"

const BookList = () => {
  return (
    <>
    <h1>amazon best selling </h1>
    <section className="booklist">
    {books.map((book) => {
      return  <Book {...book} key={book.id}/>
    })}
    </section>
    </>
  );
};



export { BookList };
