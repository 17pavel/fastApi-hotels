/*import './App.css';*/
import MyMenu from "./Components/Menu/Menu";
import SearchField from "./Components/SearchField/SearchField";
import {BrowserRouter} from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <BrowserRouter>
                <MyMenu/>
            </BrowserRouter>
        </>
    );
}

export default App;
