import { NavLink, Link } from "react-router-dom";

function Footer() {

    const fullYear = new Date().getFullYear();

    return (
        <div className="container text-light">
            <div className="row py-4 py-md-5">
                <div className="col-12 col-md-4">
                    <Link to="/"><img src="imgs/white_long_logo.png" alt="Sanal Ahşap Logo" className="img-fit w-50" /></Link>
                    <p className="mt-4">2025’te kurulan Sanal Ahşap, çelik kapı ahşapları üzerine rustik desenli, krom detaylı ve kabartma yüzeyler üreten; istenilen her modelin tasarımını ve üretimini gerçekleştiren yenilikçi bir atölyedir.</p>
                </div>
                <div className="col-12 col-md-3">
                    <h3 className="h5">Hızlı Linkler</h3>
                    <hr className="w-25" />
                    <ul className="fast-links">
                        <li><Link to={"/"}>Anasayfa</Link></li>
                        <li><Link to={"/surfaces"}>Ahşap Yüzeyleri</Link></li>
                        <li><Link to={"/gallery"}>Galeri</Link></li>
                        <li><Link to={"/institutional"}>Kurumsal</Link></li>
                        <li><Link to={"/contact"}>İletişim</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-5">
                    <h3 className="h5">Sizi hemen arayalım</h3>
                    <hr className="w-25" />
                    <form method="POST" action={"https://formsubmit.co/ilkerbrklu@gmail.com"} className="mt-3">
                        <input className="form-control rounded-0 py-3" type="text" name="İsim" placeholder="İsim" />
                        <input className="form-control rounded-0 py-3 mt-2" type="tel" name="Telefonu_Ara" placeholder="Telefon" />
                        <button className="btn btn-danger rounded-0 mt-3 py-3 px-4 fw-bold">BENİ ARA</button>
                    </form>
                    <p className="mt-3"><span className="text-danger">*</span> Çalışma saatleri içerisinde aranacaksınız.</p>
                </div>
                <div className="col-12">
                    <div className="bg-dark text-light py-3 mt-5 rounded-3 text-center">
                        <div className="container">Copyrights <span className="text-danger">© 2025 - {fullYear} Sanal Ahşap A.Ş.</span> All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;