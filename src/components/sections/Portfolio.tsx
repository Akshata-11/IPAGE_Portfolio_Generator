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
              src={
                proj.image ||
                "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
              }
              alt={proj.title}
              style={{
                width: "100%",
                borderRadius: 6,
                objectFit: "cover",
                height: 150,
              }}
            />
            <h4>{proj.title}</h4>
            <p style={{ letterSpacing: 1, color: "#495057" }}>
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
