import { Routes, Route } from "react-router-dom"
import FigInternac from "../components/FigInternac"
import FigNac from "../components/FigNac"
import Home from "../components/Home"
import Login from "../components/Login"

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/figs-nacionais" element={<FigNac/>}/>
            <Route path="/figs-internacionais" element={<FigInternac/>}/>
        </Routes>
    )
}

export default MainRoutes