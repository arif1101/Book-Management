export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t text-gray-700  lg:mt-[100px]">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Project Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">📘 BookStack</h3>
          <p>
            A minimalist library management system built with React, RTK Query, and TypeScript.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BookStack. All rights reserved.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/books" className="hover:underline">All Books</a></li>
            <li><a href="/add-book" className="hover:underline">Add New Book</a></li>
            <li><a href="/summary" className="hover:underline">Borrow Summary</a></li>
            <li><a href="/" className="hover:underline">Home</a></li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h4 className="text-md font-semibold mb-2">Developer</h4>
          <p>Built by <a href="https://github.com/arif-dev" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Arif Rahman</a></p>
          <p>Email: <a href="mailto:arif@example.com" className="hover:underline">arif@example.com</a></p>
          <p>GitHub: <a href="https://github.com/arif-dev" target="_blank" rel="noreferrer" className="hover:underline">github.com/arif-dev</a></p>
        </div>
      </div>
    </footer>
  );
}
