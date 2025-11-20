import React from "react";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "250px" }}>
      <img src={posterURL} alt={title} style={{ width: "100%" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}/5</p>
    </div>
  );
}

export default MovieCard;
