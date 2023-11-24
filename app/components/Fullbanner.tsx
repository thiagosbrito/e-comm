"use client";
import { urlFor } from "../lib/sanity";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link";

export default function Fullbanner({images}) {
    return (
        <section className="fullbanner w-full top-0 h-[500px] mx-auto mb-16 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    delay: 4000,
                }}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
            >
                {images.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="w-full flex align-middle h-[500px]" style={{backgroundImage: `url(${urlFor(item.image).url()})`}}>
                            <Link href={`/product/${item.link.slug}`} className="m-auto w-2/3 p-0">
                                <div className="flex sm:w-full p-0 flex-col align-middle h-auto my-auto">
                                    <h1 className='text-7xl text-bold' style={{color: item.title_color.hex}}>{item.title}</h1>
                                    <h3 className="text-4xl" style={{color: item.description_color.hex}}>{item.description}</h3>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );   
}
