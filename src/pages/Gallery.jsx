import PageBanner from "../components/PageBanner";

function Gallery() {

    return (
        <>
            <PageBanner currentPage="GALERİ" />
            <section className="py-5 container">
                <div className="card">
                    <div className="card-header">
                        <h1 className="card-title">Galeri</h1>
                    </div>
                    <div className="card-body my-3">
                        <div className="alert alert-warning py-4">Henüz hiç fotoğraf eklenmemiş.</div>
                    </div>
                </div>
            </section>
        </>
    )

};

export default Gallery;