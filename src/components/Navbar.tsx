import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Books" },
    { to: "/add-book", label: "Add Book" },
    { to: "/summary", label: "Summary" },
  ];

  return (
    <header className="bg-white max-w-6xl sticky top-0 z-50 mx-auto shadow">
      <nav className="mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="text-xl font-bold text-blue-600 tracking-wide">
          BookStack 📖
        </div>

        {/* Center: Navigation links */}
        <ul className="hidden lg:flex gap-6 text-gray-700 font-medium text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Profile Button */}
        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-outline btn-primary rounded-full px-4">
            👤 Profile
          </button>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-sm btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
            >
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
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
