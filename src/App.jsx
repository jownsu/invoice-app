/* React */
import { useEffect } from "react";
/* Plugins */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import SideNav from "./views/global/side_nav/side_nav";

/* Pages */
import Home from "./views/home/home";
import Invoice from "./views/invoice/invoice";

const App = () => {

    useEffect(() => {
        const dark_mode = localStorage.getItem("dark_mode");
        if(dark_mode === "true"){
            document.body.className = "dark_mode";
        }
    }, []);

    return (
        <BrowserRouter>
            <SideNav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/invoice/:invoice_id" element={<Invoice />}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App;
