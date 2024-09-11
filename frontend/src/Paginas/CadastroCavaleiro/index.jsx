import React from "react";
import Navbar from "../../Componentes/Navbar";

export default function CadastroCavaleiros() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5">Cadastro de Cavaleiros</h1>
        <form>
          <div class="mb-3">
            <label for="nome-cavaleiro" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome-cavaleiro" />
          </div>

          <div class="mb-3">
            <label for="armadura-cavaleiro" class="form-label">Descrição</label>
            <input type="text" class="form-control" id="nome-cavaleiro" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}