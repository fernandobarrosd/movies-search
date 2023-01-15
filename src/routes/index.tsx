import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:title/:id" element={<Movie/>}/>
        </Routes>
    )
}