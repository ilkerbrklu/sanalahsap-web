import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

function Contact() {

    return (
        <>
            <PageBanner currentPage="İLETİŞİM" />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.984728851799!2d35.3565443116288!3d38.75141655518636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b0599ba87d8eb%3A0x489fd5e717e7c8a5!2sSanal%20Ah%C5%9Fap!5e1!3m2!1sen!2str!4v1754847690476!5m2!1sen!2str" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-12 col-lg-6 bg-primary text-light clip-path">
                            <div className="p-3 p-lg-5">
                                <h1 className="fw-bold">Bize mesaj gönderin</h1>
                                <p>Aşağıdaki form aracılığı ile bize ulaşabilir, her türlü sorun, görüş ve önerilerinizi iletebilirsiniz.</p>
                                <form action="https://formsubmit.co/ilkerbrklu@gmail.com" method="POST">
                                    <div className="row gy-4 mt-1">
                                        <div className="col-12 col-lg-6">
                                            <input type="text" name="isim" id="name" placeholder="İsim" className="form-control rounded-0 py-2" />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="text" name="firma" placeholder="Firma" className="form-control rounded-0 py-2" />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="email" name="email" placeholder="E-posta" className="form-control rounded-0 py-2" />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="tel" name="telefon" placeholder="Telefon" className="form-control rounded-0 py-2" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="aciklama" placeholder="Açıklama" className="form-control overflow-auto" cols="30" rows="10" maxLength="1000" style={{ resize: "none" }}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-danger py-2 w-100 fw-bold">GÖNDER</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-12 bg-white mt-3 rounded-3">
                            <div className="row p-4 text-center text-dark contact-details">
                                <div className="col-12 col-lg-4">
                                    <h3><i className="fa-solid fa-location-dot text-danger"></i> Adresimiz</h3>
                                    <p>Anbar, 29. Cd. No:127, 38070 Melikgazi/Kayseri</p>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <h3><i className="fa-solid fa-message text-danger"></i> İletişim Bilgileri</h3>
                                    <p><i className="fa-solid fa-phone"></i><Link className="text-decoration-none text-dark" to="tel:+905051494506"> +90 (505) 149 45 06</Link></p>
                                    <p><i className="fa-solid fa-envelope"></i> ilkerbrklu@gmail.com</p>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <h3><i className="fa-solid fa-clock text-danger"></i> Çalışma Saatleri</h3>
                                    <p><span className="text-muted">Pazartesi - Cumartesi</span> 08:30 - 18:00</p>
                                    <p><span className="text-muted">Pazar:</span> Kapalı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};

export default Contact;