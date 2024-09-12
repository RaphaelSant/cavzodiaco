import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroCavaleiros from "../../Paginas/Cavaleiro/cadastroCavaleiro";
import CadastroArmaduras from "../../Paginas/Armaduras/cadastroArmadura";
import CadastroSagas from "../../Paginas/Sagas/cadastroSagas";

export default function Rotas() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<CadastroCavaleiros />} />
            <Route exact path="/cadastro_armaduras" element={<CadastroArmaduras />} />
            <Route exact path="/cadastro_sagas" element={<CadastroSagas />} />
          </Routes>
        </BrowserRouter>
      );
}