import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/aboutpage";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/mainPage";
import Planet from "./pages/planet";

export const RoutesComponent = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/SagaliStarSystem/" element={<MainPage/>}/>
                <Route path="/SagaliStarSystem/about" element={<AboutPage/>}/>
                <Route path="/SagaliStarSystem/objects/:id" element={<Planet/>}/>
                <Route element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;