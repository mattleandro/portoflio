import React from "react";
import "./../global_style/GlobalStyle.css";
import "./salutation.css";

function Salutation() {
  return (
    <>
      <div className="">
        <section className="salutation-container">
          <div className="salutation-text">
            <h1>Eai, eu sou o Matheus. É um prazer conhecer você!</h1>
            <p>
              Sou um Desenvolvedor Junior, buscando uma oportunidade de colocar
              em prática os conhecimentos que obtive durante minha jornada de
              estudos
            </p>
          </div>
          <section className="tecnologias">
            <div className="grid-container">
              <div className="grid-item">
                <h2>Designer</h2>
                <p>
                  Eu valorizo ​​uma estrutura de conteúdo simples, padrões de
                  design limpos e interações bem pensadas.
                </p>
              </div>
              <div className="grid-item">
                <h2>Desenvolvedor FullStack</h2>
                <p>
                  Gosto de codificar coisas do zero e gosto de dar vida às
                  ideias no navegador.
                </p>
              </div>
              <div className="grid-item">
                <h2>Estudante</h2>
                <p>
                  Sou um amante da tecnologia. Estudo programação a 2 anos.
                  Estou no 3° período da faculdade cursando Analise e
                  Desenvolvimento de Sistemas
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Salutation;
