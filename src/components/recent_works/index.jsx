import React from "react";
import "./../global_style/GlobalStyle.css";
import "./recent_works.css";

function RecentWorks() {
  return (
    <>
      <div className="main-content">
        <section className="recent-works-text">
          <div>
            <h1>Meus Trabalhos Recentes</h1>
            <p>
              Aqui estão alguns projetos de design anteriores em que trabalhei.
              Quer ver mais? Envie-me um e-mail .
            </p>
          </div>
        </section>
        <section className="recent-works-content">
          <h2>Requisição de API externa e Manipulação do DOM</h2>
          <a
            target="_blank"
            href="https://mattleandro.github.io/Ajax_Dom/"
            rel="noreferrer"
          >
            <div className="ajax-img"></div>
          </a>
        </section>
      </div>
    </>
  );
}

export default RecentWorks;
