import React from "react";
import "./../global_style/GlobalStyle.css";
import "./entrance.css";

function Entrance() {
  return (
    <>
      <div className="main-content">
        <section className="entrance_container">
          <div className="entrance_text">
            <h1>Full Stack Developer</h1>
            <p>
              Construo sistemas eficientes visando a gestão e coordenação de
              tarefas do dia a dia
            </p>
            <div className="profile_photo"></div>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <div className="svg-container">
          <div className="svg"></div>
        </div>
      </div>
    </>
  );
}

export default Entrance;
