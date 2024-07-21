"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OrderCardCarousel: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const cards = [
      {
        imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        title: "Shoes!",
        description: "If a dog chews shoes whose shoes does he choose?",
      },
      
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
    ];
  
    return (
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl m-2">
            <figure>
              <img src={card.imageUrl} alt={card.title} className="w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  
  export default OrderCardCarousel;