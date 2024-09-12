import React from "react";
import Navbar from "../../Componentes/Navbar";

export default function CadastroSagas() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5">Cadastro de Sagas</h1>
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
            <label htmlFor="armadura-sagas" className="form-label">Tipo da saga</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Selecione</option>
              <option value="1">Anime</option>
              <option value="2">Mangá</option>
              <option value="3">Filme</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Enviar imagem</label>
            <input class="form-control" type="file" id="formFile" accept="image/*" />
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </>
  );
}