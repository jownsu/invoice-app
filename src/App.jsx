/* Plugins */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import SideNav from "./views/global/side_nav/side_nav";

/* Pages */
import Home from "./views/home/home";

const App = () => {
    return (
        <BrowserRouter>
            <SideNav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
