import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/auth/login/Login";
import RagisterPage from "../components/auth/signup/Signup";
import ForgotPassword from "../components/auth/forgotpassword/ForgotPassword";
import VerifyOtp from "../components/auth/verfiyotp/VerifyOtp";
import ResetPassword from "../components/auth/resetpassword/ResetPassword";


const AllRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/ragister' element={<RagisterPage />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/verify-otp' element={<VerifyOtp />} />
                <Route path='/reset-password' element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRouter;   