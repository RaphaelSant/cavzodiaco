import React from "react";
import Navbar from "../../Componentes/Navbar";

export default function CadastroCavaleiros() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5">Cadastro de Cavaleiros</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="nome-cavaleiro" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome-cavaleiro" />
          </div>

          <div className="mb-3">
            <label htmlFor="armadura-cavaleiro" className="form-label">Descrição</label>
            <input type="text" className="form-control" id="nome-cavaleiro" />
          </div>

          <div className="mb-3">
            <label htmlFor="armadura-sagas" className="form-label">Armadura Principal (Caso não encontre, cadastre a armadura correspondente)</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Selecione</option>
              <option value="1">Pégaso</option>
              <option value="2">Andrômeda</option>
              <option value="3">Peixes</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Enviar imagem do cavaleiro</label>
            <input class="form-control" type="file" id="formFile" accept="image/*" />
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </>
  );
}