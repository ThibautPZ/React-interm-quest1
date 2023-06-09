import { useState } from "react";
import Card from "./components/card";
import "./App.css";
import "./style.scss";
const auteurs = [
  { poste: "Scénario", nom: "Yoshihiro Togashi" },
  { poste: "Dessin", nom: "Yoshihiro Togashi" },
  { poste: "Auteur", nom: "Yoshihiro Togashi" },
  { poste: "Dessine un volume tous les 4 ans", nom: "Yoshihiro Togashi" },
  { poste: "Traducteur", nom: "Thibaud Desbief" },
  { poste: "Traducteur", nom: "Rodolphe Gicquel" },
];
function App() {
  return (
    <>
      <Card auteurs={auteurs} />
    </>
  );
}

export default App;
