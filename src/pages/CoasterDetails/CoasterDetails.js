import React from "react";
import { useParams, Link } from "react-router-dom";

import './CoasterDetails.css';

const CoasterDetails = () => {
  const { coaster_id } = useParams();

  const [coaster, setCoaster] = React.useState({});

  const loadCoasterDetails = () => {
    fetch(`http://localhost:5005/api/details/${coaster_id}`)
      .then((response) => response.json())
      .then((coaster) => setCoaster(coaster));
  };

  loadCoasterDetails();

  return (
    <main className="coaster-details">
      <h1>Estos serán los detalles de {coaster.title}</h1>
      <hr />
      <img src={coaster.imageUrl} />
      <article>
        <p>{coaster.description}</p>
        <h3>Specs</h3>
        <ul>
          <li>Longitud: {coaster.length}</li>
          <li>Inversiones: {coaster.inversions}</li>
        </ul>
        <Link to="/">Volver al inicio</Link>
      </article>
    </main>
  );
};

export default CoasterDetails;
