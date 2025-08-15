import { Link } from "react-router-dom";

function PageBanner({ currentPage }) {
    return (
        <section className="banner d-none d-xl-flex">
            <div className="overlay"></div>
            <div className="banner-content">
                <nav className="banner-breadcrumb clearfix" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>ANASAYFA</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                    </ol>
                </nav>
            </div>
        </section>
    )
};

export default PageBanner;