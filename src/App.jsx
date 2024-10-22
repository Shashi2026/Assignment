import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
            style={{
              backgroundImage: `url(${d.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "500px",
            }}
          >
            <img className="w-[20vw]" src={d.img} alt="image" />
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
