import React from "react";

// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
    return (
        <>
            <Home />
            <About />
            <Work />
        </>
    );
}

export default App;
