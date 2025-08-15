import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MainLayout() {

    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="bg-primary">
                <Footer />
            </footer>
        </>
    )

};

export default MainLayout;