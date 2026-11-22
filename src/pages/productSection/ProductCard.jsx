
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductCard = ({ product }) => {
    console.log("ProductCard product:", product); // Debugging line to check the product prop
    return (
        <Box className="product-card">

            <Box className="product-image-wrapper">

                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />

                <span className="product-category">
                    {product.category}
                </span>

            </Box>

            <Box className="product-card-content">

                <Typography className="product-card-title">
                    {product.name}
                </Typography>

                <Typography className="product-card-description">
                    {product.description}
                </Typography>

                <Button
                    href={`/products/${product.id}`}
                    className="product-details-btn"
                    endIcon={<ArrowForwardIcon />}
                >
                    View Details
                </Button>

            </Box>

        </Box>
    );
};

export default ProductCard;
