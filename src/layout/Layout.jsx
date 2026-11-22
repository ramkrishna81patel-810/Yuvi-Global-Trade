import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer/Footer';



const Layout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
const AuthLayout = () => <Outlet />;

export  { Layout, AuthLayout };



