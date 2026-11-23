import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthLayout, Layout } from '../layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../components/auth/login/Login';
import Register from '../components/auth/signup/Signup';
import ForgotPassword from '../components/auth/forgotpassword/ForgotPassword';
import VerifyOtp from '../components/auth/verfiyotp/VerifyOtp';
import ResetPassword from '../components/auth/resetpassword/ResetPassword';
import FeatureDetails from '../pages/WhyChoose/FeatureDetails';
import RequestQuote from '../pages/RequestQuote/RequestQuote';
import AboutSection from '../pages/AboutSection/AboutSection';
import ProductSection from '../pages/productSection/ProductSection';
import WhyChooseUs from '../pages/WhyChoose/WhyChooseUs';
import ContactSection from '../pages/ContactSection/ContactSection';


const AllRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Layout */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/ragister" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/verify-otp" element={<VerifyOtp />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                </Route>

                {/* Main Layout */}
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:section" element={<HomePage />} />
                    <Route
                        path="/why-choose/:slug"
                        element={<FeatureDetails />}
                    />

                    <Route path="/request-quote" element={<RequestQuote />} />


                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AllRouter;