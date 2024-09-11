import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroCavaleiros from "../../Paginas/CadastroCavaleiro";

export default function Rotas() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<CadastroCavaleiros />} />
          </Routes>
        </BrowserRouter>
      );
}