import React, { useRef } from "react";
import { Button } from "reactstrap";
import { Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

interface ImsCarouselProps {
  children: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
}

const ImsCarousel: React.FC<ImsCarouselProps> = ({
  children,
  slidesPerView = 3,
  spaceBetween = 30,
  navigation = false,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.params.slidesPerView =
          window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
        swiperRef.current.swiper.update();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      {navigation && (
        <div className="my-2 d-flex justify-content-end align-items-center">
          <Button outline className="border-0" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left p-0"></i>
          </Button>
          <Button outline className="border-0" onClick={handleNext}>
            <i className="fa-solid fa-angle-right p-0"></i>
          </Button>
        </div>
      )}
      <Swiper
        ref={swiperRef}
        slidesPerView={
          window.innerWidth < 768
            ? 1
            : window.innerWidth < 992
            ? 2
            : slidesPerView
        }
        spaceBetween={spaceBetween}
        grabCursor={true}
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="ims-swiper-carousel"
      >
        {React.Children.map(children, (child) => {
          if (child) {
            return <SwiperSlide>{child}</SwiperSlide>;
          } else {
            // Return null if the condition is not met
            return null;
          }
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default ImsCarousel;
