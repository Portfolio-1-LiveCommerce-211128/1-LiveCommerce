import { BrowserRouter as Brouter, Routes, Route } from "react-router-dom";
import MainNavi from "../components/UI/molecules/mainNavi";
import Home from "../components/templates/home"
import Login from "../components/templates/login"

export default function Index() {
    return (
        <Brouter>
            <Routes>
                <Route path="/" element={<MainNavi />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Brouter>
    );
};