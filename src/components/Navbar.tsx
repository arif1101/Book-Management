import { Link } from "react-router"

export default function Navbar() {

    const links = [
        {to: '/', label: "home"},
        {to: '/books', label: "Books"},
        {to: '/add-book', label: "Add Book"},
        {to: '/summary', label: "Summary"}
    ]
    
    
  return (
    <div className="max-w-6xl bg-blue-300 mx-auto navbar">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 gap-y-28">
                {links.map(link => (
                    <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))

                }
        </ul>
        </div>
        <a className="btn btn-ghost text-xl">BookStack</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links.map(link => (
                    <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))

            }
        </ul>
    </div>
    <div className="navbar-end">
        <a className="btn">Button</a>
    </div>
    </div>
  )
}
