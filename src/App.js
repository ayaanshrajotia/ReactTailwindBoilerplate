import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiForm from "./components/MultiForm";
import RecommendPage from "./components/RecommendPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MultiForm />} />
                <Route path="/learning-paths" element={<RecommendPage />} />
            </Routes>
        </BrowserRouter>
    );
}
