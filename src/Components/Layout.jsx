import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Footer from "./Footer"

function Layout() {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout