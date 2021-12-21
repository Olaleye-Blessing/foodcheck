import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Recipes } from "./pages";
import { General, Normalize, Reset } from "./styles/Index";

function App() {
    return (
        <>
            <Normalize />
            <Reset />
            <General />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
