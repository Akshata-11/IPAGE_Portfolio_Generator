import React from "react";
import { Project } from "../../types";
import "./Portfolio.css";

interface Props {
  projects: Project[];
}

export const Portfolio: React.FC<Props> = ({ projects }) => {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2>Portfolio</h2>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: 6,
              width: 250,
              padding: 10,
            }}
            className="portfolio1"
          >
            <img
              src={proj.image || "https://via.placeholder.com/250x150"}
              alt={proj.title}
              style={{
                width: "100%",
                borderRadius: 6,
                objectFit: "cover",
                height: 150,
              }}
            />
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
