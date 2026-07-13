import Slider from "react-slick";
import type { Settings } from "react-slick";

interface CarouselItem {
  id: number;
  name: string;
  src: string;
  liveDemo: string;
}

interface CarouselProps {
  title: string;
  items: CarouselItem[];
}

const settings: Settings = {
  infinite: true,
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 824,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 420,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Carousel = ({ title, items }: CarouselProps) => {
  return (
    <div className="w-full py-10">
      <h2 className="mb-8 text-center text-xl md:text-3xl font-light text-white tablet:text-3xl">
        {title}
      </h2>
      <Slider {...settings}>
        {items.map((item) => (
          <a href={item.liveDemo} target="_blank" rel="noreferrer">
            <div key={item.id} className="px-3">
              <img
                src={item.src}
                alt={item.name}
                className="carousel-img mx-auto md:h-32 w-auto object-contain tablet:h-24 h-14"
              />
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
