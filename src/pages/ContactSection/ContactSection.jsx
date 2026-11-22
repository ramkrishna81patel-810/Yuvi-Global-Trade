
import React, { useState } from "react";

import {
    Box,
    Container,
    Typography,
    TextField,
    Button
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

import "./contactsection.css";

const contactInfo = [
    {
        id: 1,
        icon: <LocationOnIcon />,
        title: "Our Location",
        description: "Add your business address here"
    },
    {
        id: 2,
        icon: <PhoneIcon />,
        title: "Phone Number",
        description: "Add your contact number"
    },
    {
        id: 3,
        icon: <EmailIcon />,
        title: "Email Address",
        description: "Add your business email"
    },
    {
        id: 4,
        icon: <AccessTimeIcon />,
        title: "Business Hours",
        description: "Monday - Saturday | 9:00 AM - 6:00 PM"
    }
];

const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
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

        console.log("Contact Form Data:", formData);

        // Connect your contact API here.
    };

    return (
        <Box className="contact-section">

            <Container maxWidth="lg">

                {/* Section Heading */}
                <Box className="contact-heading">

                    <Typography className="contact-subtitle">
                        CONTACT US
                    </Typography>

                    <Typography className="contact-title">
                        Let's Talk About Your Packaging Needs
                    </Typography>

                    <Typography className="contact-description">
                        Have a question or need a custom packaging solution?
                        Get in touch with our team. We are happy to help.
                    </Typography>

                </Box>

                {/* Contact Grid */}
                <Box className="contact-grid">

                    {/* Contact Information */}
                    <Box className="contact-info-wrapper">

                        <Typography className="contact-box-title">
                            Contact Information
                        </Typography>

                        <Typography className="contact-box-description">
                            Reach out to us for product inquiries, custom
                            orders, bulk requirements, or any questions.
                        </Typography>

                        <Box className="contact-info-list">

                            {contactInfo.map((item) => {
                                return (
                                    <Box
                                        key={item.id}
                                        className="contact-info-item"
                                    >

                                        <Box className="contact-info-icon">
                                            {item.icon}
                                        </Box>

                                        <Box className="contact-info-content">

                                            <Typography className="contact-info-title">
                                                {item.title}
                                            </Typography>

                                            <Typography className="contact-info-text">
                                                {item.description}
                                            </Typography>

                                        </Box>

                                    </Box>
                                );
                            })}

                        </Box>

                    </Box>

                    {/* Send Message Form */}
                    <Box className="contact-form-wrapper">

                        <Typography className="contact-form-title">
                            Send Us a Message
                        </Typography>

                        <Typography className="contact-form-description">
                            Fill out the form below and we will get back
                            to you as soon as possible.
                        </Typography>

                        <Box
                            component="form"
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Name and Email */}
                            <Box className="contact-form-row">

                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </Box>

                            {/* Phone and Subject */}
                            <Box className="contact-form-row">

                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />

                                <TextField
                                    fullWidth
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />

                            </Box>

                            {/* Message */}
                            <TextField
                                fullWidth
                                multiline
                                rows={5}
                                label="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="contained"
                                endIcon={<SendIcon />}
                                className="contact-submit-btn"
                            >
                                Send Message
                            </Button>

                        </Box>

                    </Box>

                </Box>

            </Container>

        </Box>
    );
};

export default ContactSection;
