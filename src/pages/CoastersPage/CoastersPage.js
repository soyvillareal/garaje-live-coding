import React from "react";
import { Link } from "react-router-dom";
import "./CoastersPage.css";

const CoasterPage = () => {
  const [coasters, setCoasters] = React.useState([]);

  const loadCoasters = () => {
    fetch("http://localhost:5005/api/coasters")
      .then((res) => res.json())
      .then((allCoasters) => setCoasters(allCoasters));
  };

  loadCoasters();

  return (
    <main>
      <h1>Esta será la lista</h1>
      <hr />
      {coasters.map((eachCoaster, i) => {
        return (
          <Link to={`/detalles/${eachCoaster._id}`} key={i}>
            <article className="coaster-card">
              <img src={eachCoaster.imageUrl} />
              <h3>{eachCoaster.title}</h3>
            </article>
          </Link>
        );
      })}
      <Link to="/">Volver al inicio</Link>
    </main>
  );
};

export default CoasterPage;
