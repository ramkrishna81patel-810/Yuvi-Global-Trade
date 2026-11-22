import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import './whychooseus.css'
import { DesignServices, Inventory, LocalShipping, Spa, SupportAgent, Verified } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const whyChooseFeatures = [
    {
        id: 1,
        slug: "eco-friendly-packaging",
        title: "Eco-Friendly Packaging",
        description:
            "Paper packaging solutions designed to support a more sustainable environment.",
        icon: <Spa />
    },
    {
        id: 2,
        slug: "premium-quality",
        title: "Premium Quality",
        description:
            "Quality-focused paper bags designed for strength, durability and everyday use.",
        icon: <Verified />
    },
    {
        id: 3,
        slug: "custom-design-printing",
        title: "Custom Design & Printing",
        description:
            "Personalize your paper bags with custom sizes, designs and brand printing.",
        icon: <DesignServices />
    },
    {
        id: 4,
        slug: "bulk-order-support",
        title: "Bulk Order Support",
        description:
            "Packaging solutions and order support for businesses with bulk requirements.",
        icon: <Inventory />
    },
    {
        id: 5,
        slug: "reliable-delivery",
        title: "Reliable Delivery",
        description:
            "Order coordination and delivery support to help meet your business requirements.",
        icon: <LocalShipping />
    },
    {
        id: 6,
        slug: "customer-support",
        title: "Customer Support",
        description:
            "Friendly assistance to help you choose suitable paper packaging solutions.",
        icon: <SupportAgent />
    }
];
const WhyChooseUs = () => {
    const navigate = useNavigate();
    return (
        <Box className="why-choose-section" id="why-us">

            <Container maxWidth="lg">

                {/* Section Heading */}
                <Box className="why-choose-heading">

                    <Typography className="why-choose-subtitle">
                        WHY CHOOSE US
                    </Typography>

                    <Typography className="why-choose-title">
                        Why Choose Yuvi Paper Bag?
                    </Typography>

                    <Typography className="why-choose-description">
                        We are committed to providing practical,
                        quality-focused and eco-friendly paper
                        packaging solutions to meet your business needs.
                    </Typography>

                </Box>

                {/* Feature Cards */}
                <Box className="why-choose-grid">

                    {whyChooseFeatures.map((feature, index) => (
                        <Box
                            key={feature.id}
                            className="why-choose-column"
                            onClick={() => navigate(`/why-choose/${feature.slug}`)}
                            sx={{ cursor: 'pointer' }}
                        >

                            <Box className="why-choose-card">

                                <Box className="why-choose-icon">
                                    {feature.icon}
                                </Box>

                                <Typography className="why-choose-card-title">
                                    {feature.title}
                                </Typography>

                                <Typography className="why-choose-card-description">
                                    {feature.description}
                                </Typography>

                            </Box>

                        </Box>
                    ))}

                </Box>

            </Container>

        </Box>
    )
}

export default WhyChooseUs