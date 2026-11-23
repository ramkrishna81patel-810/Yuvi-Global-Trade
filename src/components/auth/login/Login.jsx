
import React, { useState } from "react";

import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

import "../auth.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux-toolkit/feature/createSlice";
import { toast } from "react-toastify";

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

const Login = () => {
    const { loading } = useSelector((state) => state.auth);


    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        console.log("Input changed:", e.target.name, e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await dispatch(
                loginUser(formData)
            ).unwrap();


            if (result.status === 200) {
                toast.success(result.message);
                navigate('/dashboard');
            }

        } catch (error) {
console.log("Login error:", error);

            toast.error(error);

        }
    };
    return (
        <Box className="login-container">

            <Box className="login-left" />

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
                            Sign In
                        </Typography>

                        <Typography color="text.secondary">
                            Please enter your details to login.
                        </Typography>

                    </Box>

                    <form onSubmit={handleSubmit}>

                        <Typography className="field-label">
                            Email Address
                        </Typography>

                        <TextField
                            name="email"
                            fullWidth
                            placeholder="Enter your email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
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

                        <Typography className="field-label">
                            Password
                        </Typography>

                        <TextField
                            name="password"
                            fullWidth
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
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
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? (
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

                        <Box className="forgot-password" variant="span" >
                            <Typography onClick={() => navigate("/forgot-password")}>
                                Forgot Password?
                            </Typography>
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<LoginIcon />}
                            className="login-button"
                            disabled={loading}
                        >

                            {loading ? 'Please Wait...' : 'Login'}
                        </Button>

                    </form>

                    <Typography className="signup-text">
                        Don't have an account?
                        <span onClick={() => navigate("/ragister")} >
                            Sign Up
                        </span>
                    </Typography>

                </Box>
            </Box>

        </Box>
    );
};

export default Login;
