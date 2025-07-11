import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Books" },
    { to: "/add-book", label: "Add Book" },
    { to: "/summary", label: "Summary" },
  ];

  return (
    <header className="max-w-6xl mx-auto bg-gradient-to-r from-white to-blue-50 shadow-lg sticky top-0 z-50">
      <nav className="px-6 py-5 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="text-2xl font-extrabold text-blue-700 tracking-wide">
          BookStack <span className="text-3xl">📖</span>
        </div>

        {/* Center: Navigation links */}
        <ul className="hidden lg:flex gap-10 text-gray-800 font-medium text-base">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition duration-200 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Profile + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Profile Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition">
            👤 Profile
          </button>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-xl">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 p-3 shadow-xl bg-white rounded-box w-48 space-y-1"
            >
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded hover:bg-blue-100 ${
                        isActive ? "text-blue-600 font-semibold" : "text-gray-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
