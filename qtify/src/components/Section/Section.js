import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Section.module.css";
import SwiperNavigationButtons from "../SwiperNavigationButtons/SwiperNavigationButtons";
export default function Section({ data, type, collapsed }) {
  return collapsed ? (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {data.map((album) => {
          return (
            <SwiperSlide>
              <Card
                data={{
                  image: album.image,
                  follows: album.follows,
                  title: album.title,
                  slug: album.slug,
                  song: album.songs,
                }}
                type={type}
              />
            </SwiperSlide>
          );
        })}
        <SwiperNavigationButtons />
      </Swiper>
    </>
  ) : (
    <div className={styles.section}>
      {data.map((album) => {
        return (
          <Card
            data={{
              image: album.image,
              follows: album.follows,
              title: album.title,
              slug: album.slug,
              song: album.songs,
            }}
            type={type}
          />
        );
      })}
    </div>
  );
}
