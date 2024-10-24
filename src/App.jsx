import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="border border-white flex justify-center ">
            <img
              src={d.background}
              alt="background"
              className="z-0 h-screen w-full object-cover"
            />
            <img
              src={d.img}
              alt=""
              className="z-50 top-0 h-[100%] w-[100vw] justify-center items-center absolute "
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
const data = [
  {
    background: "/src/cap.png",
    img: "/src/cap1.png",
  },
  {
    background: "/src/pink.png",
    img: "/src/pink1.png",
  },
  {
    background: "/src/yellow.png",
    img: "/src/yellow1.png",
  },
  {
    background: "/src/black.png",
    img: "/src/black1.png",
  },
  {
    background: "/src/cap.png",
    img: "/src/cap1.png",
  },
  { background: "/src/pink.png", img: "/src/pink1.png" },
  {
    background: "/src/yellow.png",
    img: "/src/yellow1.png",
  },
  {
    background: "/src/black.png",
    img: "/src/black1.png",
  },
];
export default App;
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 text-white cursor-pointer bg-yellow-500 p-3 rounded-full"
      style={{ zIndex: 1, top: "50%" }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

// Custom Previous Arrow component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 text-white cursor-pointer bg-yellow-500 p-3 rounded-full"
      style={{ zIndex: 1, top: "50%" }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};
