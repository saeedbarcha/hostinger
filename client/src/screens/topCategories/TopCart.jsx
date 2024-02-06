import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 6000, // Transition speed in milliseconds
    autoplay: true,
    arrows: true,
    autoplaySpeed: 900, // Autoplay speed in milliseconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Tdata = [
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-1.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-2.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-3.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-4.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-5.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-6.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-7.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-8.jpg",
      orderDetails: "3k orders",
    },
  ];
  
  return (
    <>
      {/* <Row className="slider d-flex justify-content-center align-items-center"> */}
      <Slider {...settings}>
        {Tdata?.map((value, i) => {
          return (
            <div className="d-flex justify-content-center   topCatContainer">
              <div className="slider my-3" style={{width:"500px"}}>
              <Link to="/">
                <div className="productOrderDetails d-flex  justify-content-between">
                  <span className="orderDetails">{value?.orderDetails}</span>
                </div>
                <div className=" d-flex justify-content-between productName">
                  <span className="name">{value?.name}</span>
                </div>
               
                  <div className="d-flex justify-content-center align-content-center ">
                    <img src={value?.image} alt="img" className="topCateImg w-100" fluid />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* </Row> */}
    </>
  );
};

export default TopCart;
