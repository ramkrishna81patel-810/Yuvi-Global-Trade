
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography
} from "@mui/material";

import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./industries.css";
import BakerySweet from '../../pages/images/bakery-sweets.jpg'
import RetailPaperBag from '../../pages/images/retail-fashion.jpg'
import GroceryImage from '../../pages/images/grocery-stores.jpg'
import FoodRestaurant from '../../pages/images/food-restaurants.jpg'

const industries = [
    {
        title: "Bakery & Sweets",
        description: "Paper bags for bakery products, cakes, sweets and takeaway packaging.",
        image: BakerySweet,
        icon: <BakeryDiningIcon />
    },
    {
        title: "Retail & Fashion",
        description: "Stylish paper shopping bags for clothing, footwear and retail stores.",
        image: RetailPaperBag,
        icon: <ShoppingBagIcon />
    },
    {
        title: "Grocery Stores",
        description: "Practical paper bags for grocery shops and everyday shopping.",
        image: GroceryImage,
        icon: <LocalGroceryStoreIcon />
    },
    {
        title: "Food & Restaurants",
        description: "Paper packaging bags for restaurants, cafes and food businesses.",
        image: FoodRestaurant,
        icon: <RestaurantIcon />
    }
];

export default function IndustriesSection() {
    return (
        <Box className="industries-section">
            <Container maxWidth="lg">

                <Box className="industries-heading">
                    <Typography className="industries-subtitle">
                        INDUSTRIES WE SERVE
                    </Typography>

                    <Typography variant="h3" className="industries-title">
                        Packaging Solutions for <span>Every Industry</span>
                    </Typography>

                    <Typography className="industries-description">
                        Our paper bags are suitable for different businesses,
                        providing practical and customizable packaging solutions.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {industries.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box className="industry-card">

                                <Box className="industry-image-wrapper">
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt={item.title}
                                        className="industry-image"
                                    />
                                </Box>

                                <Box className="industry-content">
                                    <Box className="industry-icon">
                                        {item.icon}
                                    </Box>

                                    <Typography className="industry-title">
                                        {item.title}
                                    </Typography>

                                    <Typography className="industry-description">
                                        {item.description}
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}
