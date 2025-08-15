import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
    useEffect(() => {
        const nav = document.querySelector('.navbar');
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-light py-4 shadow" data-bs-theme="light">
            <div className="container">
                <Link className="navbar-brand d-flex" to="/"><img src="imgs/long_logo.png" alt="Sanal Ahşap Logo" width={"220px"} /></Link>
                <button className="navbar-toggler" data-bs-target="#navlinks" data-bs-toggle="collapse"><i className="fa-solid fa-list"></i></button>
                <ul className="ms-auto navbar-nav text-uppercase justify-content-lg-center navbar-collapse collapse fw-bold" id="navlinks">
                    <li className="nav-item"><NavLink className={"nav-link"} to="/">Anasayfa</NavLink></li>
                    <li className="nav-item"><NavLink className={"nav-link"} to="/surfaces">Ahşap Yüzeyleri</NavLink></li>
                    <li className="nav-item"><NavLink className={"nav-link"} to="/gallery">Galeri</NavLink></li>
                    <li className="nav-item"><NavLink className={"nav-link"} to="/institutional">Kurumsal</NavLink></li>
                    <li className="nav-item"><NavLink className={"nav-link"} to="/contact">İletişim</NavLink></li>
                </ul>
                <ul className="navbar-nav ms-auto d-none d-lg-block">
                    <li className="nav-item">
                        <NavLink className={"btn btn-primary px-4 py-3 rounded-0"} to={"tel:+905051494506"}><i className="fa-solid fa-phone-volume"></i> Bizi Arayın</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;