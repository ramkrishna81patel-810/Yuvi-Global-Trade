import React from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import "../auth.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux-toolkit/feature/createSlice";
import { toast } from "react-toastify";

// YUVI BAG LOGO
const YuviBagIcon = () => {
    return (
        <svg viewBox="0 0 100 110" width="85" height="90">
            <path
                d="M35 37 V25 C35 5 70 5 70 25 V37"
                fill="none"
                stroke="#9b4b0b"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M20 37 L38 30 L38 100 L10 91 Z"
                fill="#78350f"
            />
            <path
                d="M38 30 L83 30 L94 100 L38 100 Z"
                fill="#c16a12"
            />
            <path
                d="M48 76 C48 43 76 30 91 32 C91 57 72 79 48 76Z"
                fill="#4c9b32"
                stroke="#ffffff"
                strokeWidth="3"
            />
            <path
                d="M49 78 Q66 57 84 38"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
            />
        </svg>
    );
};

const Register = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        number: "",
        password: "",
    });

    const [agree, setAgree] = React.useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await dispatch(
                registerUser(formData)
            ).unwrap();

            if (result.status === 201) {
                toast.success(result.message);
            }

        } catch (error) {
            console.log("Registration error:", error);

            toast.error(error);

        }
    };

    return (
        <Box className="signup-container">
            <Box className="signup-left" />

            <Box className="signup-right">
                <Box className="signup-form-wrapper">
                    <Box className="brand-logo">
                        <Box className="brand-icon-box">
                            <YuviBagIcon />
                        </Box>
                        <Box className="brand-divider" />
                        <Box className="brand-text">
                            <Typography className="brand-title">YUVI</Typography>
                            <Typography className="brand-subtitle">PAPER BAG</Typography>
                            <Typography className="brand-tagline">
                                PACK • PRINT • PROMOTE
                            </Typography>
                        </Box>
                    </Box>


                    <Box className="form-heading">
                        <Typography variant="h4" fontWeight="bold">
                            Create Account
                        </Typography>
                        <Typography color="text.secondary">
                            Register to get started with YUVI PAPER BAG.
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <Typography className="field-label">Full Name</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />

                        {/* Email Address */}
                        <Typography className="field-label">Email Address</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
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

                        {/* Mobile Number */}
                        <Typography className="field-label">Mobile Number</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="tel"
                            name="number"
                            placeholder="Enter 10 digit mobile number"
                            value={formData.number}
                            onChange={handleChange}
                            inputProps={{
                                maxLength: 10,
                                pattern: "[0-9]{10}"
                            }}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />

                        {/* Password */}
                        <Typography className="field-label">Password</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="password"
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
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
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            }}
                        />



                        <FormControlLabel
                            className="signup-terms"
                            control={
                                <Checkbox
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="I agree to the Terms and Conditions"
                        />

                        {/* Register Button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<PersonIcon />}
                            className="signup-button"
                        >
                            Create New Account
                        </Button>
                    </form>

                    {/* Login Link */}
                    <Typography className="signup-text">
                        Already have an account?
                        <span onClick={() => navigate("/")}> Sign In</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;