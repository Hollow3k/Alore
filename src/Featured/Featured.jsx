import React from "react";
import "./Featured.css";

export function Featured({ src, title, price }) {
  return (
    <section className="featured" id="featured">
      <img className="featured-image" src={src} alt={title} />

      <div className="featured-info">
        <h3 className="featured-title">{title}</h3>
        <p className="featured-price">{price}</p>
        <button className="featured-cta" type="button">Buy now</button>
      </div>
    </section>
  );
}