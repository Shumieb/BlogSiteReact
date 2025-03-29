import { Link } from "react-router"

function NavBar() {
    return (
        <header className="bg-gray-900 py-2 px-6 text-gray-50 flex justify-between align-center border-b-1 border-gray-800">
            <p className="text-2xl"><Link to="/">My BlogSite</Link></p>
            <nav>
                <ul className="flex justify-end align-center">
                    <li className="text-xl mx-3 hover:text-gray-300">
                        <Link to="/blogs-home">Home</Link>
                    </li>
                    <li className="text-xl mx-3 hover:text-gray-300">
                        <Link to="/blogs-list">Blogs</Link>
                    </li>
                    <li className="text-xl mx-3 hover:text-gray-300">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar