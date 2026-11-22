
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Container,
    Typography,
    Grid,
    Button
} from '@mui/material';

import StraightenIcon from '@mui/icons-material/Straighten';
import PrintIcon from '@mui/icons-material/Print';
import PaletteIcon from '@mui/icons-material/Palette';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BrushIcon from '@mui/icons-material/Brush';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './customzation-section.css';

const customizationFeatures = [
    {
        id: 1,
        title: 'Custom Bag Sizes',
        description:
            'Choose paper bag dimensions according to your product and packaging requirements.',
        icon: <StraightenIcon />
    },
    {
        id: 2,
        title: 'Logo & Brand Printing',
        description:
            'Showcase your brand with custom logo printing and professional branding.',
        icon: <PrintIcon />
    },
    {
        id: 3,
        title: 'Color Customization',
        description:
            'Select colors and designs that match your business identity.',
        icon: <PaletteIcon />
    },
    {
        id: 4,
        title: 'Handle Options',
        description:
            'Choose suitable handles for your paper bags based on your packaging needs.',
        icon: <ShoppingBagIcon />
    },
    {
        id: 5,
        title: 'Creative Designs',
        description:
            'Customize your paper bags with unique styles and attractive designs.',
        icon: <BrushIcon />
    },
    {
        id: 6,
        title: 'Bulk Custom Orders',
        description:
            'Get customized packaging solutions for your business bulk requirements.',
        icon: <InventoryIcon />
    }
];

const CustomizationSection = () => {

    const navigate = useNavigate();

    return (
        <Box className="customization-section">

            <Container maxWidth="lg">

                {/* Section Heading */}
                <Box className="customization-heading">

                    <Typography className="customization-subtitle">
                        CUSTOMIZATION SOLUTIONS
                    </Typography>

                    <Typography className="customization-title">
                        Make Your Paper Bags Unique
                    </Typography>

                    <Typography className="customization-description">
                        Create paper bags that reflect your brand identity.
                        From custom sizes to logo printing, we offer flexible
                        packaging customization options for your business.
                    </Typography>

                </Box>

                {/* Customization Features */}
                <Box className="customization-grid">
                    {customizationFeatures.map((feature) => {
                        return (
                            <Box
                                key={feature.id}
                                className="customization-card"
                            >
                                <Box className="customization-icon">
                                    {feature.icon}
                                </Box>

                                <Typography className="customization-card-title">
                                    {feature.title}
                                </Typography>

                                <Typography className="customization-card-description">
                                    {feature.description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>

                {/* Bottom CTA */}
                <Box className="customization-cta">

                    <Box className="customization-cta-content">

                        <Typography className="customization-cta-title">
                            Have a Custom Packaging Requirement?
                        </Typography>

                        <Typography className="customization-cta-description">
                            Tell us your requirements and let's create
                            the perfect paper bag for your brand.
                        </Typography>

                    </Box>

                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => navigate('/contact')}
                        className="customization-cta-button"
                    >
                        Get Custom Quote
                    </Button>

                </Box>

            </Container>

        </Box>
    );
};

export default CustomizationSection;
