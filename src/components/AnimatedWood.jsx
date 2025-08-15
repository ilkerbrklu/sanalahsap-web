import AnimatedLines from "../components/AnimetedLines";
import { Link } from "react-router-dom";

function AnimatedWood() {
    return (
        <section className="container py-5 my-5">
            <div className="row">
                <div className="col-12 col-lg-4 col-xl-3">
                    <AnimatedLines />
                </div>
                <div className="col-12 col-lg-8 col-xl-9 d-flex flex-column justify-content-center ps-2 ps-lg-5 mt-5">
                    <h1 className="h2">İstekleriniz doğrultusunda, rustik ahşap yüzeyleri.</h1>
                    <p className="mt-3 w-md-75">Çelik kapı ahşapları üzerine rustik desenli, krom detaylı ve kabartma yüzeyler üreten; her modeli tamamen istekleriniz doğrultusunda tasarlayan bir atölyedir. Hayalinizdeki ahşap yüzeyi, ölçüsünden desenine, dokusundan rengine kadar sizin zevkinize göre şekillendiriyoruz. <br /> <br /> Herhangi bir modelin fotoğrafını ya da nasıl bir tasarım istediğinizi bize iletmeniz yeterlidir. Ekibimiz, talebiniz doğrultusunda özgün ve kaliteli ahşap yüzeyleri titizlikle hazırlar. Detaylar için iletişime geçebilirsiniz.</p>
                    <div className="buttons mt-3 align-items-center">
                        <Link className="btn btn-danger py-3 rounded-0 me-3" to={"/surfaces"}><i className="fa-solid fa-magnifying-glass-arrow-right"></i> Ahşap Yüzeylerini İnceleyin</Link>
                        <Link className={"btn btn-primary px-4 py-3 d-none d-md-inline-block rounded-0"} to={"tel:+905051494506"}><i className="fa-solid fa-phone-volume"></i> Bizi Arayın</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AnimatedWood;