import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "../../components/shared";
export const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>
    );
};
