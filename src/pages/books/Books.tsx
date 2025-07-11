import { useState } from "react";
import { useDeleteBookMutation, useGetBooksQuery } from "../../redux/api/bookCreateApi";
import Swal from 'sweetalert2';
import Modal from "../../components/Modal";
import UpdateBookForm from "../updateBookForm/UpdateBookForm";
import BorrowBookForm from "../borrowBookForm/BorrowBookForm";

export default function Books() {
  const { data, isLoading } = useGetBooksQuery({});
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data ?? [];
  const [selectedBook, setSelectedBook] = useState(null)
  const [borrowBookTarget, setBorrowBookTarget] = useState<{id: string; title: string; copies: number} | null>(null)

  const handleEdit = (book) => {
    setSelectedBook(book)
  }

  const handleDelete = async(id: string) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won’t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e3342f',  // red
    cancelButtonColor: '#6c757d',   // gray
    confirmButtonText: 'Yes, delete it!',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire('Deleted!', 'Book has been deleted.', 'success');
      } catch (err) {
        Swal.fire('Failed', 'Something went wrong.', 'error');
      }
    }
  });
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">📚 Library Books</h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-blue-600 text-white text-sm">
            <tr>
              <th className="text-left px-6 py-3">Title</th>
              <th className="text-left px-6 py-3">Author</th>
              <th className="text-left px-6 py-3">Genre</th>
              <th className="text-left px-6 py-3">ISBN</th>
              <th className="text-center px-6 py-3">Copies</th>
              <th className="text-center px-6 py-3">Availability</th>
              <th className="text-center px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  Loading books...
                </td>
              </tr>
            ) : books.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No books found.
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr
                  key={book.id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">{book.title}</td>
                  <td className="px-6 py-4 text-gray-700">{book.author}</td>
                  <td className="px-6 py-4 text-gray-600">{book.genre}</td>
                  <td className="px-6 py-4 text-gray-500">{book.isbn}</td>
                  <td className="px-6 py-4 text-center font-semibold">{book.copies}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        book.copies > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {book.copies > 0 ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  {/* Action Buttons  */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      {/* Edit */}
                      <button
                        onClick={() => handleEdit(book)}
                        className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
                      >
                        ✏️ <span>Edit</span>
                      </button>

                      {/* Borrow */}
                      <button
                        onClick={() => setBorrowBookTarget({id: book._id, title: book.title, copies: book.copies})}
                        className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-md transition"
                      >
                        📘 <span>Borrow</span>
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition"
                      >
                        🗑️ <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {
        selectedBook && (
          <Modal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)}>
            <UpdateBookForm book={selectedBook} onClose={() => setSelectedBook(null)}/>
          </Modal>
        )
      }
      {
        borrowBookTarget && (
          <Modal
          isOpen={!!borrowBookTarget}
          onClose={()=> setBorrowBookTarget(null)}
          >
            <BorrowBookForm 
            book={borrowBookTarget} 
            onClose={()=> setBorrowBookTarget(null)}
            />
          </Modal>
        )
      }
    </div>
  );
}
