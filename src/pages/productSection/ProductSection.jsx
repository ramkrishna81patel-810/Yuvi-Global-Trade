
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "./ProductCard";
import "./productsection.css";
import kraftPaperBagImage from '../images/kraft-paper-bag.jpg'
import shoppingPaperBagImage from '../images/shopping-paper-bags.webp'
import customPaperBagImage from '../images/custom-paper-bags.jpg'
import foodPaperBagImage from "../images/food-packing-bags.jpg";
import groceryPaperBagImage from "../images/grocery-paper-bags.jpg";
import handlePaperBagImage from "../images/handle-paper-bags.jpg";

const products = [
    {
        id: 1,
        name: "Kraft Paper Bags",
        description:
            "Strong and eco-friendly kraft paper bags for everyday packaging.",
        image: kraftPaperBagImage,
        category: "Eco Friendly"
    },
    {
        id: 2,
        name: "Shopping Paper Bags",
        description:
            "Premium shopping bags for retail stores and fashion brands.",
        image: shoppingPaperBagImage,
        category: "Shopping"
    },
    {
        id: 3,
        name: "Custom Printed Bags",
        description:
            "Customized paper bags with your company logo and branding.",
        image: customPaperBagImage,
        category: "Custom Printing"
    },
    {
        id: 4,
        name: "Grocery Paper Bags",
        description:
            "Durable paper bags designed for grocery stores and supermarkets.",
        image: groceryPaperBagImage,
        category: "Grocery"
    },
    {
        id: 5,
        name: "Food Packaging Bags",
        description:
            "Practical paper packaging bags for restaurants and bakeries.",
        image: foodPaperBagImage,
        category: "Food Packaging"
    },
    {
        id: 6,
        name: "Handle Paper Bags",
        description:
            "Stylish paper bags available with different handle options.",
        image: handlePaperBagImage,
        category: "Premium"
    }
];

const ProductSection = () => {
    return (
        <Box className="product-section" id="products">
            <Container maxWidth="lg">

                {/* Section Heading */}
                <Box className="product-heading">

                    <Typography className="product-subtitle">
                        OUR PRODUCTS
                    </Typography>

                    <Typography className="product-title">
                        Explore Our Paper Bag Collection
                    </Typography>

                    <Typography className="product-description">
                        Discover our wide range of eco-friendly and
                        customizable paper bags designed for businesses
                        of every size.
                    </Typography>

                </Box>

                {/* Product Grid */}


                {/* Product Grid */}
                <Box className="product-grid">

                    {products.map(function (product) {
                        console.log("Rendering product:", product); // Debugging log
                        return (
                            <Box key={product.id} className="product-column">
                                <ProductCard product={product} />
                            </Box>
                        );
                    })}

                </Box>



                {/* View All Button */}
                <Box className="product-footer">
                    <Button
                        variant="contained"
                        href="/products"
                        className="product-view-all"
                        endIcon={<ArrowForwardIcon />}
                    >
                        View All Products
                    </Button>
                </Box>

            </Container>
        </Box>
    );
};

export default ProductSection;
