
import React from "react";

import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";

import "../auth.css";
import { useNavigate } from "react-router-dom";

const YuviBagIcon = () => {
    return (
        <svg
            viewBox="0 0 100 110"
            width="85"
            height="90"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Bag Handle */}
            <path
                d="M35 37 V25 C35 5 70 5 70 25 V37"
                fill="none"
                stroke="#9b4b0b"
                strokeWidth="5"
                strokeLinecap="round"
            />

            {/* Bag Back Side */}
            <path
                d="M20 37 L38 30 L38 100 L10 91 Z"
                fill="#78350f"
            />

            {/* Bag Front Side */}
            <path
                d="M38 30 L83 30 L94 100 L38 100 Z"
                fill="#c16a12"
            />

            {/* Green Leaf */}
            <path
                d="M48 76 C48 43 76 30 91 32 C91 57 72 79 48 76Z"
                fill="#4c9b32"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinejoin="round"
            />

            {/* Leaf Detail */}
            <path
                d="M49 78 Q66 57 84 38"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Forgot Password submitted");
    };

    return (
        <Box className="login-container">

            <Box className="forgot-left">
                <img
                    src='/images/png/Warm Kraft Bags with Greenery - Copy.png'
                    alt="Yuvi Global Trade"
                    className="login-image"
                />
            </Box>

            <Box className="login-right">

                <Box className="login-form">
                    <Box className="brand-logo">

                        <Box className="brand-icon-box">
                            <YuviBagIcon />
                        </Box>

                        <Box className="brand-divider"></Box>

                        <Box className="brand-text">
                            <Typography className="brand-title">
                                YUVI
                            </Typography>

                            <Typography className="brand-subtitle">
                                PAPER BAG
                            </Typography>

                            <Typography className="brand-tagline">
                                PACK • PRINT • PROMOTE
                            </Typography>
                        </Box>

                    </Box>



                    <Box className="form-heading">

                        <Typography variant="h3" fontWeight="bold" >
                            Forgot Password
                        </Typography>


                    </Box>

                    <form onSubmit={handleSubmit}>

                        <Typography className="field-label">
                            Email
                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="Enter your email"
                            type="email"
                            required
                            size="small"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<LoginIcon />}
                            className="send-button"
                            onClick={() => navigate('/verify-otp')}
                        >
                            Send
                        </Button>

                        <span className="back-to-login" onClick={() => navigate('/')}>
                            Back to Login
                        </span>
                    </form>



                </Box>
            </Box>

        </Box>
    );
};

export default ForgotPassword;
