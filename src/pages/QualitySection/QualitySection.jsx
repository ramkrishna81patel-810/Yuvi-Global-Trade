
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import ShieldIcon from "@mui/icons-material/Shield";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./quality.css";

const qualityFeatures = [
    {
        icon: <VerifiedIcon />,
        title: "Premium Paper Material",
        description: "We focus on quality paper materials for durable and reliable packaging."
    },
    {
        icon: <ShieldIcon />,
        title: "Strength & Durability",
        description: "Our paper bags are designed to handle everyday packaging requirements."
    },
    {
        icon: <WorkspacePremiumIcon />,
        title: "Quality Standards",
        description: "We aim to maintain consistent quality across our paper bag products."
    },
    {
        icon: <CheckCircleIcon />,
        title: "Quality Inspection",
        description: "We focus on checking finishing, handles, printing and overall product quality."
    }
];

export default function QualitySection() {
    return (
        <Box className="quality-section">
            <Container maxWidth="lg">

                <Box className="quality-heading">
                    <Typography className="quality-subtitle">
                        OUR COMMITMENT
                    </Typography>

                    <Typography variant="h3" className="quality-title">
                        Quality That Builds <span>Trust</span>
                    </Typography>

                    <Typography className="quality-description">
                        We believe quality is the foundation of every successful
                        packaging solution. Our focus is on delivering reliable,
                        durable and well-finished paper bags.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {qualityFeatures.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box className="quality-card">
                                <Box className="quality-icon">
                                    {item.icon}
                                </Box>

                                <Typography className="quality-card-title">
                                    {item.title}
                                </Typography>

                                <Typography className="quality-card-description">
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}
