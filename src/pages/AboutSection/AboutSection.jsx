
import React from "react";

import {
    Box,
    Container,
    Typography,
    Button
} from "@mui/material";
import {
    LocalOffer,
    LocalShipping,
    Verified,
    SupportAgent
} from "@mui/icons-material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EcoFriendlyImage from '../images/eco-friendly.png';
import customPrintingImage from '../images/custom-printing.png';
import premiumQualityImage from '../images/quality.png';
import bulkOrderSupportImage from '../images/bulk-order.png';
import "./aboutsection.css";
const aboutFeatures = [
    {
        title: "Eco-Friendly Materials",
        image: EcoFriendlyImage
    },
    {
        title: "Custom Sizes & Printing",
        image: customPrintingImage
    },
    {
        title: "Premium Quality",
        image: premiumQualityImage
    },
    {
        title: "Bulk Order Support",
        image: bulkOrderSupportImage
    }
];


const features = [
    {
        icon: <LocalOffer />,
        title: "Best Price"
    },
    {
        icon: <LocalShipping />,
        title: "Order Support"
    },
    {
        icon: <Verified />,
        title: "Best Quality"
    },
    {
        icon: <SupportAgent />,
        title: "Best Service"
    }
];
const AboutSection = () => {
    return (
        <>
          <Box className="about-section" id="about">

            <Container maxWidth="lg">

                <Box className="about-grid">

                    {/* Left Image */}
                    <Box className="about-image-column">

                        <Box className="about-image-wrapper">

                            <img
                                src={customPrintingImage}
                                alt="Eco Friendly Paper Bags"
                                className="about-image"
                            />

                            <Box className="about-image-overlay">
                                <Typography className="about-image-caption">
                                    Sustainable Packaging
                                </Typography>
                            </Box>

                        </Box>

                    </Box>

                    {/* Right Content */}
                    <Box className="about-content">

                        <Typography className="about-subtitle">
                            ABOUT YUVI PAPER BAG
                        </Typography>

                        <Typography className="about-title">
                            Your Trusted Partner in
                            <span> Eco-Friendly Packaging</span>
                        </Typography>

                        <Typography className="about-description">
                            Welcome to Yuvi Paper Bag, your destination
                            for eco-friendly and practical paper packaging
                            solutions.
                        </Typography>

                        <Typography className="about-description">
                            We focus on providing paper bags designed
                            for different business needs, including
                            shopping, retail, grocery and food packaging.
                            Our goal is to offer packaging solutions
                            that combine functionality, quality and
                            environmental responsibility.
                        </Typography>

                        {/* Features */}

                        <Box className="about-features">

                            {aboutFeatures.map((feature, index) => {
                                console.log("Rendering feature:", feature); // Debugging line to check the feature object
                                return (
                                    <Box
                                        key={index}
                                        className="about-feature-item"
                                    >
                                        <Box className="about-feature-image">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                            />
                                        </Box>

                                        <Typography className="about-feature-text">
                                            {feature.title}
                                        </Typography>
                                    </Box>
                                );
                            })}

                        </Box>


                        {/* Button */}
                        <Box className="about-actions">

                            <Button
                                variant="contained"
                                href="/about"
                                className="about-button"
                                endIcon={<ArrowForwardIcon />}
                            >
                                Discover More
                            </Button>

                        </Box>

                    </Box>

                </Box>
                <Box className="about-features-section">

                    <Container maxWidth="lg">

                        <Typography className="about-features-heading">
                            Paper Bag Packaging Solutions for Every Business
                        </Typography>

                        <Box className="about-heading-line about-feature-line" />

                        <Box className="about-features-grid">

                            {features.map((feature, index) => (
                                <Box
                                    key={index}
                                    className="about-feature-item"
                                >

                                    <Box className="about-feature-icon">
                                        {feature.icon}
                                    </Box>

                                    <Typography className="about-feature-title">
                                        {feature.title}
                                    </Typography>

                                </Box>
                            ))}

                        </Box>

                    </Container>

                </Box>

            </Container>

        </Box>
        </>
      

    );
};

export default AboutSection;
