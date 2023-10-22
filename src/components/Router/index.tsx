import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../../layout/index"; 
import { Page404 } from "../../page/Page404"; 
import { Dashboard } from "../../page/Dashboard";
import { Home } from "../../page/Home/Home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route path="/" index element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
