
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography
} from "@mui/material";

import RecyclingIcon from "@mui/icons-material/Recycling";
import NatureIcon from "@mui/icons-material/Nature";
import "./sustainability.css";
import { Spa } from "@mui/icons-material";
import EcoFriendly from '../../pages/images/Eco-Friendly Paper Bag and Earth Display.png'

const sustainabilityFeatures = [
    {
        icon: <Spa />,
        title: "Eco-Conscious Packaging",
        description: "Paper-based packaging solutions designed with environmental considerations."
    },
    {
        icon: <RecyclingIcon />,
        title: "Recyclable Materials",
        description: "Paper packaging can support recycling when suitable materials and local systems are available."
    },
    {
        icon: <NatureIcon />,
        title: "Responsible Choices",
        description: "We encourage thoughtful packaging choices and responsible material use."
    }
];

export default function SustainabilitySection() {
    return (
        <Box className="sustainability-section">
            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center">

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box className="sustainability-image-wrapper">
                            <Box
                                component="img"
                                src={EcoFriendly}
                                alt="Eco friendly paper bags"
                                className="sustainability-image"
                            />
                            <Box className="sustainability-image-label">
                                <Spa />
                                <Typography>
                                    Thoughtful Paper Packaging
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="sustainability-subtitle">
                            OUR RESPONSIBILITY
                        </Typography>

                        <Typography variant="h3" className="sustainability-title">
                            A Better Choice for <span>Packaging</span>
                        </Typography>

                        <Typography className="sustainability-description">
                            We believe packaging choices matter. Paper bags
                            offer a versatile alternative to conventional
                            plastic shopping bags and can be recyclable
                            depending on their material and local recycling facilities.
                        </Typography>

                        <Box className="sustainability-features">
                            {sustainabilityFeatures.map((item, index) => (
                                <Box className="sustainability-feature" key={index}>
                                    <Box className="sustainability-icon">
                                        {item.icon}
                                    </Box>

                                    <Box>
                                        <Typography className="sustainability-feature-title">
                                            {item.title}
                                        </Typography>

                                        <Typography className="sustainability-feature-description">
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
