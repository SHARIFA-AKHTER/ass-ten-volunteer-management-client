import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      title: "Join Hands to Make a Difference!",
      description: " Discover opportunities to contribute your time and skills to meaningful causes in your community.",
      image: "https://i.ibb.co.com/mRJNV0d/Volunteer-3.jpg",
    },
    {
      id: 2,
      title: "Empowering Volunteers, Transforming Lives!",
      description: "Connect with organizations that need your help and create lasting impacts together.",
      image: "https://i.ibb.co.com/LShsHMg/Volunteer-1.jpg",
    },
    {
      id: 3,
      title: "Your Journey of Giving Starts Here!",
      description: " Find volunteer programs that match your passion and inspire positive change around the world.",
      image: "https://i.ibb.co.com/hy3M3Cp/volunteer-4.jpg",
    },
  ];

  return (
    <div className="w-full mx-auto my-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full object-cover h-[500px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg max-w-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
