import React from "react";
import Navbar from "../../Componentes/Navbar";

export default function CadastroArmaduras() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center mt-5">Cadastro de Armaduras</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nome-cavaleiro" className="form-label">Constelação</label>
                        <input type="text" className="form-control" id="nome-cavaleiro" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="armadura-cavaleiro" className="form-label">Descrição</label>
                        <input type="text" className="form-control" id="nome-cavaleiro" />
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