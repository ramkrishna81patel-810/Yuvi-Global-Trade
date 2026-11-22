
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const slides = [
    {
        title: "Eco-Friendly Paper Bags",
        description:
            "Sustainable Packaging Solutions for a Better Tomorrow.",
        image: "/images/hero-1.jpg"
    },
    {
        title: "Custom Printed Paper Bags",
        description:
            "Make Your Brand Stand Out with Premium Custom Packaging.",
        image: "/images/hero-2.jpg"
    },
    {
        title: "Bulk Orders & Wholesale Supply",
        description:
            "High Quality Paper Bags for Every Business.",
        image: "/images/hero-3.jpg"
    }
];

const HeroSection = () => {
    return (
        <Box className="hero-section">

            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                navigation={true}
                pagination={{ clickable: true }}
                className="hero-swiper"
            >

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            className="hero-slide"
                            style={{
                                backgroundImage: `url(${slide.image})`
                            }}
                        >

                            <Box className="hero-overlay">
                                <Container maxWidth="lg">
                                    <Box className="hero-content">

                                        <Typography className="hero-subtitle">
                                            WELCOME TO YUVI PAPER BAG
                                        </Typography>

                                        <Typography className="hero-title">
                                            {slide.title}
                                        </Typography>

                                        <Typography className="hero-description">
                                            {slide.description}
                                        </Typography>

                                     

                                    </Box>
                                </Container>
                            </Box>

                        </Box>
                    </SwiperSlide>
                ))}

            </Swiper>

        </Box>
    );
};

export default HeroSection;
