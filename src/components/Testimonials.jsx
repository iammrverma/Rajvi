// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { useEffect, useState } from "react";
import { RaiseUpOnScroll } from "../animations/Animation";

const Slide = ({ testimonial, width }) => {
  const { name, img, description, designation } = testimonial;
  return (
    <>
      <div
        className="slide"
        style={{
          border: "1px solid var(--border)",
          padding: "2rem ",
          height: "30rem",
          width: width,
          color: "var(--text-primary-color)",
          borderRadius: "1rem",
          backgroundColor: "#1b1b1b",
          backdropFilter: "blur(15px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              height: "10rem",
              width: "100%",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                borderBottomLeftRadius: "50%",

                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <h4 style={{ marginBottom: "3rem" }}>{description}</h4>

          <div className="details" style={{}}>
            <p>{name}</p>
            <p style={{ color: "var(--theme)" }}>{designation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Testimonials = ({ testimonial = [] }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Set initial value
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const slideWidth = 25 * rootFontSize;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [slidePerView, setSlidePerView] = useState(
    Math.floor(viewportWidth / slideWidth)
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSlidePerView(Math.floor(viewportWidth / slideWidth));
    console.log(slidePerView);
  }, [viewportWidth]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: `${isSmallScreen ? "100%" : "60%"}`,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <RaiseUpOnScroll>
          <h1
            style={{
              fontSize: `${isSmallScreen ? "3rem" : "6.25rem"}`,
              letterSpacing: "4px",
            }}
          >
            Proud Testimonials
          </h1>
        </RaiseUpOnScroll>
        <RaiseUpOnScroll>
          <p style={{ fontSize: "2rem" }}>
            Read experiences of our past clients
          </p>
        </RaiseUpOnScroll>
      </div>

      <div
        className="Swiper-Container"
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Swiper slidesPerView={slidePerView}>
          {testimonial.map((item, index) => {
            return (
              <SwiperSlide>
                <Slide key={index} testimonial={item} width={slideWidth} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
