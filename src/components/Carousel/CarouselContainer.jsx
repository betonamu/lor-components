import { useRef } from "react";
import Carousel from ".";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const CarouselContainer = ({ slides, slideToShow, renderSlide }) => {
    const ref = useRef(null);

    return (
        <Carousel
            slideToShow={slideToShow}
            onInit={(carousel) => {
                console.log({ carousel });
                ref.current = carousel;
            }}
        >
            <button
                style={{ position: "absolute", left: 0, top: "50%", zIndex: 1 }}
                onClick={() => ref.current.scrollPrev()}
            >
                <ChevronLeftIcon />
            </button>
            <Carousel.Root>
                <Carousel.Container>
                    {slides.map((slide, index) => (
                        <Carousel.Slide key={slide.id || index}>{renderSlide(slide, index)}</Carousel.Slide>
                    ))}
                </Carousel.Container>
            </Carousel.Root>
            <button
                style={{ position: "absolute", right: 0, top: "50%", zIndex: 1 }}
                onClick={() => ref.current.scrollNext()}
            >
                <ChevronRightIcon />
            </button>
        </Carousel>
    );
};

export default CarouselContainer;
