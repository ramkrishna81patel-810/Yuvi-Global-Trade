
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
    Box,
    Container,
    Typography,
    Grid,
    Button
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './whychooseus.css';

import EcoFriendlyImage from '../images/eco-friendly.png';
import customPrintingImage from '../images/custom-printing.png';
import premiumQualityImage from '../images/quality.png';
import bulkOrderSupportImage from '../images/bulk-order.png';
import deliveryImage from '../images/reliable-delivery.png';
import supportImage from '../images/customer-support.png';
const featureData = [
    {
        id: 1,
        slug: 'eco-friendly-packaging',
        title: 'Eco-Friendly Packaging',
        image: EcoFriendlyImage,
        description: 'Paper packaging solutions designed to support a more sustainable environment.',
        content: 'At Yuvi Paper Bag, we focus on providing paper packaging solutions that offer an alternative to conventional plastic packaging.',
        details: [
            'Environment-friendly paper materials',
            'Recyclable paper packaging options',
            'Suitable for everyday packaging',
            'Different paper material choices'
        ]
    },
    {
        id: 2,
        slug: 'premium-quality',
        title: 'Premium Quality',
        image: premiumQualityImage,
        description: 'Quality-focused paper bags designed for strength, durability and everyday use.',
        content: 'We focus on delivering quality paper bags with reliable construction and careful finishing for different business requirements.',
        details: [
            'Quality paper material',
            'Strong and durable construction',
            'Careful finishing',
            'Consistent quality checks'
        ]
    },
    {
        id: 3,
        slug: 'custom-design-printing',
        title: 'Custom Design & Printing',
        image: customPrintingImage,
        description: 'Personalize your paper bags with custom sizes, designs and brand printing.',
        content: 'We offer customization options to help businesses create paper bags that represent their brand identity.',
        details: [
            'Custom paper bag sizes',
            'Brand logo printing',
            'Different printing designs',
            'Customized packaging options'
        ]
    },
    {
        id: 4,
        slug: 'bulk-order-support',
        title: 'Bulk Order Support',
        image: bulkOrderSupportImage,
        description: 'Packaging solutions and order support for businesses with bulk requirements.',
        content: 'We support business customers with bulk paper bag requirements and order coordination.',
        details: [
            'Bulk order enquiries',
            'Business packaging requirements',
            'Customized order quantities',
            'Order coordination support'
        ]
    },
    {
        id: 5,
        slug: 'reliable-delivery',
        title: 'Reliable Delivery',
        image: deliveryImage,
        description: 'Order coordination and delivery support to help meet your business requirements.',
        content: 'We coordinate orders and delivery requirements to provide a smooth ordering experience.',
        details: [
            'Order coordination',
            'Delivery planning',
            'Order status communication',
            'Business order support'
        ]
    },
    {
        id: 6,
        slug: 'customer-support',
        title: 'Customer Support',
        image: supportImage,
        description: 'Friendly assistance to help you choose suitable paper packaging solutions.',
        content: 'Our customer support helps businesses understand available paper bag options and packaging requirements.',
        details: [
            'Product information',
            'Packaging suggestions',
            'Order-related assistance',
            'Customer enquiries support'
        ]
    }
];
const FeatureDetails = () => {

    const { slug } = useParams();
    const navigate = useNavigate();

    const feature = featureData.find(
        (item) => item.slug === slug
    );

    if (!feature) {
        return (
            <Box className="feature-not-found">
                <Container>
                    <Typography variant="h4">
                        Feature Not Found
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => navigate('/')}
                    >
                        Back to Home
                    </Button>
                </Container>
            </Box>
        );
    }

 

    return (
        <Box className="feature-details-page">

            {/* Hero Section */}
            <Box className="feature-details-hero">
                <Container maxWidth="lg">

                    <Button
                        className="feature-back-button"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>

                    <Box className="feature-hero-content">

                        <Typography className="feature-breadcrumb">
                            Home / Why Choose Us / {feature.title}
                        </Typography>

                        <Typography className="feature-hero-title">
                            {feature.title}
                        </Typography>

                        <Typography className="feature-hero-description">
                            {feature.description}
                        </Typography>

                    </Box>

                </Container>
            </Box>

            {/* Details Section */}
            <Container maxWidth="lg">

                <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    className="feature-main-section"
                >

                    {/* Feature Image */}
                    <Grid item xs={12} md={6}>

                        <Box className="feature-image-wrapper">

                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="feature-main-image"
                            />

                            <Box className="feature-image-overlay">
                                <Typography>
                                    Yuvi Paper Bag
                                </Typography>
                            </Box>

                        </Box>

                    </Grid>

                    {/* Feature Content */}
                    <Grid item xs={12} md={6}>

                        <Box className="feature-content">

                            <Typography className="feature-small-heading">
                                WHY CHOOSE YUVI
                            </Typography>

                            <Typography className="feature-content-title">
                                {feature.title}
                            </Typography>

                            <Typography className="feature-content-description">
                                {feature.content}
                            </Typography>

                            <Typography className="feature-list-heading">
                                What We Offer
                            </Typography>

                            <Box className="feature-details-list">

                                {feature.details.map((detail, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            className="feature-detail-item"
                                        >
                                            <CheckCircleIcon />

                                            <Typography>
                                                {detail}
                                            </Typography>
                                        </Box>
                                    );
                                })}

                            </Box>

                            <Button
                                className="feature-contact-button"
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                onClick={() => navigate('/contact')}
                            >
                                Contact Us
                            </Button>

                        </Box>

                    </Grid>

                </Grid>

                {/* Bottom CTA */}
                <Box className="feature-bottom-cta">

                    <Box>
                        <Typography className="feature-cta-title">
                            Looking for the Right Paper Bag Solution?
                        </Typography>

                        <Typography className="feature-cta-description">
                            Get in touch with us for your business packaging requirements.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate('/contact')}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Get In Touch
                    </Button>

                </Box>

            </Container>

        </Box>
    );
};

export default FeatureDetails;
