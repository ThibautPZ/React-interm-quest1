import React from "react";
import props from "react";
// import "./style.scss";
const Card = ({ auteurs }) => {
  return (
    <div>
      <div className="🔲">
        <img
          id="logo"
          src="https://www.kana.fr/wp-content/uploads/2021/12/collection-shonen.png?x10060"
          alt="logo"
        ></img>
        <img
          src="https://static.fnac-static.com/multimedia/Images/FR/NR/42/ac/12/1223746/1507-1/tsp20220703134522/Hunter-X-Hunter.jpg"
          alt="Hunter X Hunter"
        ></img>
        <div className="🅰">
          <h2>HUNTER X HUNTER</h2>
          <p className="synopsis">
            Dans les pas de son père, Gon quitte son village pour se présenter
            au difficile examen des hunters. En chemin, Gon se fera des amis.
            Mais survivront-ils à la première épreuve face à des participants
            particulièrement dangereux... ?
          </p>

          <p className="synopsis">
            Si quelques adversaires se montrent impitoyables dès le début,
            d'autres comme Hisoka le magicien font preuve d'une cruauté pour le
            moins inquiétante...
          </p>
          <p className="synopsis">
            Ce synopsis venant du site officiel manque vraiment d'inspiration.
            Les éditeurs l'ont fait écrire par ChatGPT ?
          </p>
          <ul id="tags">
            <li>Action</li>
            <li>Aventure</li>
            <li>Manga</li>
            <li>Nekketsu</li>
          </ul>
        </div>
      </div>
      <h3>LES AUTEURS</h3>

      <div id="auteurs">
        {auteurs.map((element, i) => (
          <section key={element + i}>
            <p className="🌸">{element.poste}</p>
            <div className="🔜">
              <p className="♻">{element.nom}</p>
              <div className="🤎"> </div>
            </div>
          </section>
        ))}
      </div>
      <div id="parution">
        <ul>
          <li>Au Japon</li>
          <li>En cours</li>
          <li>Chez Kana</li>
          <li>En cours</li>
          <li>Déjà parus</li>
          <li>37</li>
          <li>Catégorie</li>
          <li>Nekketsu</li>
          <li>Collection</li>
          <li>Shonen Kana</li>
        </ul>
      </div>
      <div id="☮">
        <a href="https://www.kana.fr/series/hunter-x-hunter/">
          Librement inspiré du site des éditions KANA
        </a>
      </div>
    </div>
  );
};

export default Card;
