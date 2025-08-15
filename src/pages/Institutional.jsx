import PageBanner from "../components/PageBanner";

function Contact() {

    return (
        <>
            <PageBanner currentPage="KURUMSAL" />
            <section className="py-5">
                <div className="container">
                    <h1 className="fw-bold text-center">Sanal Ahşap - Kurumsal</h1>
                    <div className="institutional-details my-5">
                        <div>
                            <h2 className="fw-bold">Kurumsal Kimlik</h2>
                            <p className="fs-5"><b>Sanal Ahşap</b>, çelik kapı ahşapları üzerine rustik desenli, krom detaylı ve kabartma yüzeyler üreten bir tasarım atölyesidir. Her modeli tamamen istekleriniz doğrultusunda tasarlayarak, mekânlarınıza estetik ve özgünlük katıyoruz. Hayalinizdeki ahşap yüzeyi, ölçüsünden desenine, dokusundan rengine kadar sizin zevkinize göre şekillendiriyoruz.</p>
                        </div>
                        <div>
                            <h2 className="fw-bold">Misyonumuz</h2>
                            <p className="fs-5">Müşterilerimizin taleplerine uygun, kaliteli ve estetik ahşap yüzeyler üretmek ve her projeyi titizlikle tamamlamak. Kişiye özel tasarım anlayışımızla, mekânlarınıza değer katan çözümler sunmayı hedefliyoruz.</p>
                        </div>
                        <div>
                            <h2 className="fw-bold">Vizyonumuz</h2>
                            <p className="fs-5">Ahşap işçiliğinde yenilikçi ve güvenilir bir marka olarak tanınmak; her müşterimizin beklentisini karşılayan, özgün ve yüksek kaliteli tasarımlar üretmek.</p>
                        </div>
                        <div>
                            <h2 className="fw-bold">Değerlerimiz</h2>
                            <ul className="fs-5">
                                <li><span className="fw-bold">Kalite:</span> Her projede titizlikle seçilmiş malzeme ve işçilik.</li>
                                <li><span className="fw-bold">Özgünlük:</span> Her tasarım, müşterinin isteğine özel olarak hazırlanır.</li>
                                <li><span className="fw-bold">Güven:</span> Zamanında teslimat ve şeffaf iletişim.</li>
                                <li><span className="fw-bold">Müşteri Odaklılık:</span> Taleplerinizi dinler, en iyi çözümleri sunarız.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="fw-bold">Hizmetlerimiz</h2>
                            <ul className="fs-5">
                                <li>Çelik kapı ahşap yüzey tasarımı</li>
                                <li>Rustik desen ve krom detay uygulamaları</li>
                                <li>Kabartma yüzey çalışmaları</li>
                                <li>İstenilen her modelin tasarımı ve üretimi</li>
                                <p className="text-muted mt-3">Herhangi bir modelin fotoğrafını veya tasarım isteğinizi bize iletmeniz yeterlidir. Ekibimiz, talebiniz doğrultusunda özgün ve kaliteli ahşap yüzeyleri titizlikle hazırlar.</p>
                            </ul>
                        </div>
                        <div>
                            <h2 className="fw-bold">Neden Biz?</h2>
                            <ul className="fs-5">
                                <li>Talebe özel tasarım yapabilme yeteneği</li>
                                <li>Kişiye özel ölçü ve desen seçenekleri</li>
                                <li>Uzun ömürlü ve estetik tasarımlar</li>
                                <li>Deneyimli ve titiz işçilik</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="fw-bold">İletişim Çağrısı</h2>
                            <p className="fs-5">Hayalinizdeki ahşap yüzeyi tasarlamak için bizimle iletişime geçin. <b>Telefon, e-posta veya iletişim</b> formu üzerinden taleplerinizi paylaşabilir, projenizi birlikte hayata geçirebiliriz.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};

export default Contact;