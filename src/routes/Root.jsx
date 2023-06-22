import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

export default function Root() {
    return <div>
        <Header />
        <Outlet />
        <Footer />
        </div>
}