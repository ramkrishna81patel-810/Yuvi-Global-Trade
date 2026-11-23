

import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

import "../auth.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

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

const ResetPassword = () => {
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordsMatch = newPassword === confirmPassword;
    const showPasswordError =
        confirmPassword.length > 0 && !passwordsMatch;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset Password submitted");
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
                            Reset Password
                        </Typography>


                    </Box>

                    <form onSubmit={handleSubmit}>

                        <Typography className="field-label">
                            Old Password
                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="Enter your old password"
                            type={showOldPassword ? "text" : "password"}
                            required
                            size="small"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowOldPassword(!showOldPassword)}
                                                edge="end"
                                            >
                                                {showOldPassword ? (
                                                    <VisibilityIcon />
                                                ) : (
                                                    <VisibilityOffIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />




                        <Typography className="field-label">
                            New Password
                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="Enter your new password"
                            type={showNewPassword ? "text" : "password"}
                            required
                            size="small"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                edge="end"
                                            >
                                                {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />

                        <Typography className="field-label">
                            Confirm Password
                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="Confirm your new password"
                            type={showconfirmPassword ? "text" : "password"}
                            required
                            size="small"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={showPasswordError}
                            helperText={
                                showPasswordError ? "Passwords do not match!" :
                                    confirmPassword.length > 0 ? "Passwords match!" : ""
                            }
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showconfirmPassword)}
                                                edge="end"
                                            >
                                                {showconfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
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
                        >
                            Reset Password
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

export default ResetPassword;
