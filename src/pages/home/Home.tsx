import { Link } from "react-router";
import { useGetBooksQuery } from "../../redux/api/bookCreateApi";

export default function Home() {
  const { data } = useGetBooksQuery({});
  const books = data?.data ?? [];
  const featuredBooks = books.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24 bg-gradient-to-b from-blue-50 via-white to-purple-50">

      {/* 🟦 Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
          📚 Welcome to BookStack
        </h1>
        <p className="text-gray-700 text-xl max-w-2xl mx-auto font-medium">
          A modern and elegant system to manage our books and borrow history.
        </p>
        <div className="mt-8">
          <Link
            to="/books"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            🚀 Browse Library
          </Link>
        </div>
      </section>

      {/* 🚀 Quick Navigation Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">⚡ Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/books"
            className="bg-gradient-to-r from-cyan-100 to-blue-100 border border-blue-300 shadow-md p-6 rounded-xl text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-blue-700">📖 View All Books</h3>
            <p className="text-gray-600 mt-2 text-sm">Explore and manage your entire book collection.</p>
          </Link>
          <Link
            to="/add-book"
            className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 shadow-md p-6 rounded-xl text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-green-700">➕ Add New Book</h3>
            <p className="text-gray-600 mt-2 text-sm">Add new books to your library in seconds.</p>
          </Link>
          <Link
            to="/summary"
            className="bg-gradient-to-r from-pink-100 to-purple-100 border border-purple-300 shadow-md p-6 rounded-xl text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-purple-700">📊 Borrow Summary</h3>
            <p className="text-gray-600 mt-2 text-sm">Get insights on your most borrowed books.</p>
          </Link>
        </div>
      </section>

      {/* 📌 Featured Books Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">📌 Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h4 className="text-lg font-bold text-gray-800">{book.title}</h4>
              <p className="text-sm text-gray-600 mt-1">✍️ Author: {book.author}</p>
              <span className="mt-3 inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full">
                📚 {book.genre}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonial / Review */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 p-10 rounded-xl text-center shadow-lg">
        <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
          “This system makes managing books feel effortless. I love the clean interface!” <br />
          <span className="text-lg font-semibold text-indigo-600">— A Happy Librarian</span>
        </blockquote>
        <p className="mt-4 text-sm text-gray-600">📍 Built with ❤️ using React + Redux Toolkit</p>
      </section>
    </div>
  );
}
