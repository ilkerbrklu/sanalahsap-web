import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import { Modal } from "react-bootstrap";

function Surfaces() {
    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const handleShow = (img) => {
        setSelectedImg(img);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <>
            <PageBanner currentPage="AHŞAP YÜZEYLERİ" />
            <section className="py-5">
                <div className="container">
                    <h1 className="text-center fw-bold">Sanal Ahşap - Ahşap Yüzeyleri</h1>
                    <hr className="w-25 m-auto mt-4" />
                    <div className="row py-5">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <div
                                className="col-12 text-center col-md-6 col-lg-4 mb-5"
                                key={i}
                            >
                                <img
                                    src={`/imgs/surfaces/${i + 1}.jpg`}
                                    alt={`Görsel ${i + 1}`}
                                    className="img-fluid"
                                    style={{ height: "600px", cursor: "pointer" }}
                                    onClick={() =>
                                        handleShow(`/imgs/surfaces/${i + 1}.jpg`)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Modal show={show} onHide={handleClose} centered size="sm">
                <Modal.Body className="p-0">
                    {selectedImg && (
                        <img src={selectedImg} alt="" className="img-fluid w-100" />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Surfaces;
