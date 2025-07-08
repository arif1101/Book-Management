
import Book from "../../components/book";
import { allBooks } from "../../redux/features/book/bookSlice";
import { useAppSelector } from "../../redux/hooks"

export default function Books() {

    const books = useAppSelector(allBooks);
    console.log(books)
    
  return (
    <div className="flex max-w-[1280px] mx-auto gap-6">
        <div className="flex-1/3 bg-red-100">
            <h1>filter</h1>
        </div>
        <div className="grid grid-cols-4 flex-2/3 gap-[30px] bg-red-100 p-5.5">
            {
                books.map((book) =>(
                    <Book key={book.id} book={book}/>
                ))
            }
        </div>
    </div>
  )
}
