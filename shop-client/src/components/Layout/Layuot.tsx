import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const Layout = () => {
    return (
        <div>
            <div className="container">
                <Header />
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}