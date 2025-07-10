import { useGetBooksQuery } from "../../redux/api/bookCreateApi";

export default function Books() {
  const { data, isLoading } = useGetBooksQuery({});
  const books = data?.data ?? [];

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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
