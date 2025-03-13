import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./home";
import AboutPage from "./about";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/about" Component={AboutPage} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
