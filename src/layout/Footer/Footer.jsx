
import React from "react";

import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Button,
    Divider
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";



const quickLinks = [
    { title: "Home", href: "#home" },
    { title: "About Us", href: "#about" },
    { title: "Products", href: "#products" },
    { title: "Why Choose Us", href: "#why-choose-us" },
    { title: "Manufacturing Process", href: "#manufacturing" },
    { title: "Contact Us", href: "#contact" }
];

const products = [
    "Shopping Paper Bags",
    "Kraft Paper Bags",
    "Gift Paper Bags",
    "Printed Paper Bags"
];

export default function Footer() {
    return (
        <Box component="footer" className="yp-footer">

            <Container maxWidth="lg">

                <Grid container spacing={4} className="footer-main">

                    {/* Company Information */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>

                        <Typography className="footer-logo">
                            Yuvi <span>Paper Bag</span>
                        </Typography>

                        <Typography className="footer-description">
                            We provide quality paper packaging solutions
                            for retail, gifting and business requirements.
                            Our focus is on practical and eco-friendly
                            packaging options.
                        </Typography>

                        <Box className="footer-social-links">

                            <Link href="#" className="footer-social-link">
                                Facebook
                            </Link>

                            <Link href="#" className="footer-social-link">
                                Instagram
                            </Link>

                            <Link href="#" className="footer-social-link">
                                LinkedIn
                            </Link>

                        </Box>

                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 6, sm: 6, md: 2 }}>

                        <Typography className="footer-heading">
                            Quick Links
                        </Typography>

                        <Box className="footer-link-list">

                            {quickLinks.map((item) => {
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="footer-link"
                                        underline="none"
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}

                        </Box>

                    </Grid>

                    {/* Products */}
                    <Grid size={{ xs: 6, sm: 6, md: 3 }}>

                        <Typography className="footer-heading">
                            Our Products
                        </Typography>

                        <Box className="footer-link-list">

                            {products.map((item) => {
                                return (
                                    <Link
                                        key={item}
                                        href="#products"
                                        className="footer-link"
                                        underline="none"
                                    >
                                        {item}
                                    </Link>
                                );
                            })}

                        </Box>

                    </Grid>

                    {/* Contact Information */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                        <Typography className="footer-heading">
                            Contact Us
                        </Typography>

                        <Box className="footer-contact-list">

                            <Box className="footer-contact-item">
                                <LocationOnIcon />

                                <Typography>
                                    Indore, Madhya Pradesh, India
                                </Typography>
                            </Box>

                            <Box className="footer-contact-item">
                                <EmailIcon />

                                <Link href="mailto:info@yuvipaperbag.com">
                                    info@yuvipaperbag.com
                                </Link>
                            </Box>

                            <Box className="footer-contact-item">
                                <PhoneIcon />

                                <Link href="tel:+919876543210">
                                    +91 98765 43210
                                </Link>
                            </Box>

                        </Box>

                        <Button
                            variant="contained"
                            href="#contact"
                            endIcon={<ArrowForwardIcon />}
                            className="footer-enquiry-btn"
                        >
                            Send an Enquiry
                        </Button>

                    </Grid>

                </Grid>

                {/* Footer Bottom */}
                <Divider className="footer-divider" />

                <Box className="footer-bottom">

                    <Typography className="footer-copyright">
                        © {new Date().getFullYear()} Yuvi Paper Bag.
                        All rights reserved.
                    </Typography>

                    <Typography className="footer-tagline">
                        Thoughtful Paper Packaging Solutions
                    </Typography>

                </Box>

            </Container>

        </Box>
    );
}
