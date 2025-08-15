
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperHeader() {
    return (
        <section>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                speed={650}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ height: "70vh" }}
            >
                <SwiperSlide>
                    <img
                        className="img-fit img-h-fit object-fit-cover"
                        style={{ objectPosition: "center" }}
                        src="imgs/sanalahsap_banner.jpg"
                        alt="Sanal Ahşap Banner'ı 0"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="img-fit img-h-fit object-fit-cover"
                        style={{ objectPosition: "top" }}
                        src="imgs/cnc_running0.jpg"
                        alt="CNC Router Resmi 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="img-fit img-h-fit object-fit-cover"
                        style={{ objectPosition: "center" }}
                        src="imgs/cnc_running1.jpg"
                        alt="CNC Router Resmi 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="img-fit img-h-fit object-fit-cover"
                        style={{ objectPosition: "top" }}
                        src="imgs/cnc_running2.jpg"
                        alt="CNC Router Resmi 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="img-fit img-h-fit object-fit-cover"
                        style={{ objectPosition: "bottom" }}
                        src="imgs/cnc_running3.jpg"
                        alt="CNC Router Resmi 4"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
};

export default SwiperHeader;