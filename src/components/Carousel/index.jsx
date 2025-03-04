import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

import createContext from "@/utils/create-context";

import styles from "./Carousel.module.scss";

const [CarouselProvider, useContext] = createContext({});

const Carousel = ({ children, slideToShow = 1, slideSpacing = "10px", onInit }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        if (!emblaApi) return;

        onInit?.(emblaApi);
        emblaApi.on("reInit", onInit);

        return () => emblaApi.off("reInit", onInit);
    }, [emblaApi]);

    return (
        <div
            style={{
                "--slide-size": `calc(100% / ${slideToShow})`,
                "--slide-spacing": slideSpacing,
            }}
            className={styles.carousel}
        >
            <CarouselProvider value={{ emblaRef, emblaApi }}>{children}</CarouselProvider>
        </div>
    );
};

const ViewPort = ({ children, className, props }) => {
    const { emblaRef } = useContext();

    return (
        <div ref={emblaRef} className={classNames(className, styles.root)} {...props}>
            {children}
        </div>
    );
};

const Container = ({ children, className, ...props }) => {
    return (
        <div className={classNames(styles.container, className)} {...props}>
            {children}
        </div>
    );
};

const Slide = ({ children, className, ...props }) => {
    return (
        <div className={classNames(styles.slide, className)} {...props}>
            {children}
        </div>
    );
};

const Button = ({ children, direction = "prev", className, ...props }) => {
    return (
        <button
            className={classNames(styles.carouselButton, className, {
                [styles.next]: direction === "next",
                [styles.prev]: direction === "prev",
            })}
            {...props}
        >
            {children}
        </button>
    );
};

Carousel.ViewPort = ViewPort;
Carousel.Container = Container;
Carousel.Slide = Slide;
Carousel.Button = Button;

export default Carousel;
