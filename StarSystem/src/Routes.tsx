import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/aboutpage";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/mainPage";
import Planet from "./pages/planet";
import TestPage from "./pages/test";

export const RoutesComponent = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/objects/:id" element={<Planet/>}/>
                <Route path="/test" element={<TestPage/>}/>
                <Route element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;