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
        imageUrl: "/images/Trolly.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/sunglass.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/suitMen.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/shoe.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/partyWearMen.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/lipstick.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/dressWomen.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/watch.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
      {
        imageUrl: "/images/bag.webp",
        title: "Watches",
        description: "Time is what we want most, but what we use worst.",
      },
    ];
  
    return (
      

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl m-2">
            <figure>
              <img src={card.imageUrl} alt={card.title} className="w-[400px] h-[300px]" />
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