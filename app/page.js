"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">
        Discover Your Perfect Aesthetic
      </h1>

      <Link href="/all-tiles">
        <button className="btn mt-4">Browse Now</button>
      </Link>

      <marquee className="mt-10">
        New Arrivals | Weekly Feature | Modern Tiles Collection
      </marquee>

      <div className="mt-10">
        <Swiper spaceBetween={10} slidesPerView={2}>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/400/300?3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}