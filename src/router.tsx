import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/home";
//import Certificates from "../src/pages/Certificates/certificates";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/certificates" element={<Certificates />} /> */}
            </Routes>
        </Router>
    )
}
export default AppRouter;