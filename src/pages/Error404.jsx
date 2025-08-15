import { Link } from "react-router-dom";

function Error404() {

    return (
        <>
            <div className="container text-center my-5">
                <div className="error404-img-container">
                    <img src="imgs/404.png" alt="404 Error Görseli" className="rounded img-fit img-h-300" />
                </div>
                <div className="contents mt-3">
                    <h1 className="fw-bold h3">Aradığınız Sayfa Mevcut Değil!</h1>
                    <p> Link yanlış olabilir ya da sayfa silinmiş olabilir.</p>
                    <Link className="btn btn-danger btn-lg mt-3 rounded-0 py-3" to="/"><i className="fa-solid fa-arrow-left"></i> Anasayaya dön</Link>
                </div>
            </div>
        </>
    )

};

export default Error404;