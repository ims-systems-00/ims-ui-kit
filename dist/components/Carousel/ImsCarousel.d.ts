import React from "react";
interface ImsCarouselProps {
    children: React.ReactNode;
    slidesPerView?: number;
    spaceBetween?: number;
    navigation?: boolean;
}
declare const ImsCarousel: React.FC<ImsCarouselProps>;
export default ImsCarousel;
