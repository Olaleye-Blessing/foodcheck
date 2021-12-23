import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Recipes } from "./pages";
import { General, Normalize, Reset } from "./styles/Index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Normalize />
                <Reset />
                <General />
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
