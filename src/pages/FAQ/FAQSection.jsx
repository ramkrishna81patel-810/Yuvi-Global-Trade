
import React from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";

const faqs = [
    {
        question: "What types of paper bags do you offer?",
        answer: "We offer paper bags for shopping, retail, bakery, grocery and food packaging applications, subject to product availability."
    },
    {
        question: "Do you provide custom sizes and designs?",
        answer: "Yes, customers can discuss their required bag dimensions, paper type, handle style and printing preferences."
    },
    {
        question: "Can I get my company logo printed on paper bags?",
        answer: "Yes, custom branding and logo printing can be discussed according to the selected paper bag specifications and order quantity."
    },
    {
        question: "Do you accept bulk orders?",
        answer: "Yes, you can contact our team with your required quantity and product specifications for a bulk order quotation."
    },
    {
        question: "Do you supply paper bags for international buyers?",
        answer: "International supply enquiries are welcome. Please contact us with your destination country, product requirements and estimated quantity."
    },
    {
        question: "How can I request a price quotation?",
        answer: "You can submit your requirements through our Request a Quote page or contact us directly through the website."
    }
];

export default function FAQSection() {
    return (
        <Box className="faq-section">
            <Container maxWidth="md">

                <Box className="faq-heading">
                    <Typography className="faq-subtitle">
                        HAVE QUESTIONS?
                    </Typography>

                    <Typography variant="h3" className="faq-title">
                        Frequently Asked <span>Questions</span>
                    </Typography>

                    <Typography className="faq-description">
                        Find answers to common questions about our paper bags,
                        customization and ordering process.
                    </Typography>
                </Box>

                <Box className="faq-list">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            className="faq-accordion"
                            disableGutters
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="faq-summary"
                            >
                                <Typography className="faq-question">
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails className="faq-details">
                                <Typography>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}
