import React from "react";
import logo from "./logo.PNG"

export default function Navbar() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg border-body" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="70" height="30" className="d-inline-block align-text-top rounded" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Página Inicial</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastrar
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Cavaleiro</a></li>
                                <li><a class="dropdown-item" href="/">Armadura</a></li>
                                <li><a class="dropdown-item" href="/">Saga</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}