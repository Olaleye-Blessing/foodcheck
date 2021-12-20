import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";
import { General, Normalize, Reset } from "./styles/Index";

function App() {
    return (
        <>
            <Normalize />
            <Reset />
            <General />
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
