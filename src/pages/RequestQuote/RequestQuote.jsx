
import React, { useState } from "react";

import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    MenuItem
} from "@mui/material";

import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./requestquote.css";

const RequestQuote = () => {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        size: "",
        printing: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Quote Request:", formData);

        // Connect your backend API here.

    };

    return (

        <Box className="request-quote-section">

            <Container maxWidth="lg">

                <Box className="quote-main-wrapper">

                    {/* Left Information Section */}

                    <Box className="quote-info-section">

                        <Box className="quote-info-icon">
                            <RequestQuoteIcon />
                        </Box>

                        <Typography className="quote-info-subtitle">
                            GET YOUR BEST PRICE
                        </Typography>

                        <Typography className="quote-info-title">
                            Request a Quote
                        </Typography>

                        <Typography className="quote-info-description">
                            Looking for quality paper bags at competitive
                            prices? Share your requirements with us and
                            receive a customized quotation.
                        </Typography>

                        <Box className="quote-benefits">

                            {[
                                "Competitive wholesale pricing",
                                "Custom sizes and printing",
                                "Bulk order support",
                                "Quality packaging solutions"
                            ].map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        className="quote-benefit-item"
                                    >
                                        <CheckCircleIcon />

                                        <Typography>
                                            {item}
                                        </Typography>

                                    </Box>
                                );
                            })}

                        </Box>

                        <Box className="quote-info-bottom">

                            <Typography>
                                Have questions before ordering?
                            </Typography>

                            <Typography>
                                Contact our team for assistance.
                            </Typography>

                        </Box>

                    </Box>


                    {/* Quote Form Section */}

                    <Box className="quote-form-section">

                        <Typography className="quote-form-title">
                            Tell Us Your Requirements
                        </Typography>

                        <Typography className="quote-form-description">
                            Fill in the details below to receive your
                            customized price quotation.
                        </Typography>

                        <Box
                            component="form"
                            className="quote-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Customer Details */}

                            <Typography className="quote-form-heading">
                                Customer Information
                            </Typography>

                            <Grid container spacing={2}>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Company Name"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>

                            </Grid>


                            {/* Product Details */}

                            <Typography className="quote-form-heading">
                                Product Requirements
                            </Typography>

                            <Grid container spacing={2}>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Product"
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Kraft Paper Bags">
                                            Kraft Paper Bags
                                        </MenuItem>

                                        <MenuItem value="Shopping Paper Bags">
                                            Shopping Paper Bags
                                        </MenuItem>

                                        <MenuItem value="Gift Paper Bags">
                                            Gift Paper Bags
                                        </MenuItem>

                                        <MenuItem value="Printed Paper Bags">
                                            Printed Paper Bags
                                        </MenuItem>

                                    </TextField>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Required Quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        required
                                    >
                                        {[
                                            "500 Bags",
                                            "1000 Bags",
                                            "2000 Bags",
                                            "5000 Bags",
                                            "10000 Bags",
                                            "Custom Quantity"
                                        ].map((item) => {
                                            return (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            );
                                        })}
                                    </TextField>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Bag Size"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        required
                                    >
                                        {[
                                            "Small",
                                            "Medium",
                                            "Large",
                                            "Custom Size"
                                        ].map((item) => {
                                            return (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            );
                                        })}
                                    </TextField>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Printing Requirement"
                                        name="printing"
                                        value={formData.printing}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Logo Printing">
                                            Logo Printing
                                        </MenuItem>

                                        <MenuItem value="Custom Printing">
                                            Custom Printing
                                        </MenuItem>

                                        <MenuItem value="Without Printing">
                                            Without Printing
                                        </MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Additional Requirements"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your bag size, design, handle type or other requirements..."
                                    />
                                </Grid>

                            </Grid>


                            {/* Submit Button */}

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                endIcon={<SendIcon />}
                                className="quote-submit-btn"
                            >
                                Submit Quote Request
                            </Button>

                            <Typography className="quote-form-note">
                                Our team will review your requirements
                                and contact you with a quotation.
                            </Typography>

                        </Box>

                    </Box>

                </Box>

            </Container>

        </Box>
    );
};

export default RequestQuote;
