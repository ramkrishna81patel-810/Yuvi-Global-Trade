import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Container,
    Typography,
    Button
} from '@mui/material';

import ForestIcon from '@mui/icons-material/Forest';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PrintIcon from '@mui/icons-material/Print';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import HandymanIcon from '@mui/icons-material/Handyman';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './manufacturing.css';

const manufacturingSteps = [
    {
        id: 1,
        number: '01',
        title: 'Raw Material Selection',
        description:
            'We select suitable paper materials based on the required bag design, strength, size and intended application.',
        icon: <ForestIcon />,
        details: [
            'Kraft paper and other suitable paper grades',
            'Paper GSM selection',
            'Material quality inspection',
            'Selection based on bag requirements'
        ]
    },
    {
        id: 2,
        number: '02',
        title: 'Design & Planning',
        description:
            'The bag dimensions, handle style, printing requirements and design specifications are planned before production.',
        icon: <ArchitectureIcon />,
        details: [
            'Bag size and dimensions',
            'Paper colour and GSM',
            'Handle and bottom design',
            'Customer artwork and specifications'
        ]
    },
    {
        id: 3,
        number: '03',
        title: 'Printing & Branding',
        description:
            'Approved artwork and branding elements are printed on the paper according to the agreed design.',
        icon: <PrintIcon />,
        details: [
            'Logo and brand name printing',
            'Custom artwork and graphics',
            'Printing colour selection',
            'Print quality checking'
        ]
    },
    {
        id: 4,
        number: '04',
        title: 'Paper Cutting & Folding',
        description:
            'Paper sheets or rolls are cut and folded according to the required bag dimensions and production specifications.',
        icon: <ContentCutIcon />,
        details: [
            'Paper sheet cutting',
            'Accurate size measurement',
            'Side and bottom folding',
            'Preparation for bag assembly'
        ]
    },
    {
        id: 5,
        number: '05',
        title: 'Bag Making & Finishing',
        description:
            'The prepared paper is assembled into bags, with suitable handles and finishing according to the approved design.',
        icon: <HandymanIcon />,
        details: [
            'Bag forming and pasting',
            'Handle attachment',
            'Bottom pasting and reinforcement',
            'Final appearance inspection'
        ]
    },
    {
        id: 6,
        number: '06',
        title: 'Quality Check & Packaging',
        description:
            'Finished bags are inspected, counted and packed carefully before dispatch according to the order requirements.',
        icon: <InventoryIcon />,
        details: [
            'Bag size and appearance inspection',
            'Handle and pasting checks',
            'Quantity verification',
            'Packing and dispatch preparation'
        ]
    }
];

const ManufacturingProcess = () => {

    const navigate = useNavigate();

    return (
        <Box className="manufacturing-section">

            <Container maxWidth="lg">

                {/* Section Heading */}
                <Box className="manufacturing-heading">

                    <Typography className="manufacturing-subtitle">
                        FROM RAW MATERIAL TO FINISHED PRODUCT
                    </Typography>

                    <Typography className="manufacturing-title">
                        Our Paper Bag Manufacturing Process
                    </Typography>

                    <Typography className="manufacturing-description">
                        Discover how paper bags are made through a series
                        of carefully planned production stages, from
                        material selection to final quality inspection.
                    </Typography>

                </Box>

                {/* Manufacturing Steps */}
                <Box className="manufacturing-grid">

                    {manufacturingSteps.map((step) => {
                        return (
                            <Box
                                key={step.id}
                                className="manufacturing-card"
                            >

                                <Box className="manufacturing-card-top">

                                    <Typography className="manufacturing-number">
                                        {step.number}
                                    </Typography>

                                    <Box className="manufacturing-icon">
                                        {step.icon}
                                    </Box>

                                </Box>

                                <Typography className="manufacturing-card-title">
                                    {step.title}
                                </Typography>

                                <Typography className="manufacturing-card-description">
                                    {step.description}
                                </Typography>

                                <Box className="manufacturing-card-details">

                                    {step.details.map((detail, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                className="manufacturing-detail-item"
                                            >
                                                <Box className="manufacturing-dot" />

                                                <Typography>
                                                    {detail}
                                                </Typography>
                                            </Box>
                                        );
                                    })}

                                </Box>

                            </Box>
                        );
                    })}

                </Box>

                {/* Bottom CTA */}
                <Box className="manufacturing-cta">

                    <Box className="manufacturing-cta-content">

                        <Typography className="manufacturing-cta-title">
                            Looking for Quality Paper Bags?
                        </Typography>

                        <Typography className="manufacturing-cta-description">
                            Share your bag size, design, printing and
                            quantity requirements with our team.
                        </Typography>

                    </Box>

                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => navigate('/contact')}
                        className="manufacturing-cta-button"
                    >
                        Contact Us
                    </Button>

                </Box>

            </Container>

        </Box>
    );
};

export default ManufacturingProcess;