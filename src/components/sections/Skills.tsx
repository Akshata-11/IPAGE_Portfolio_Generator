import React from "react";
import "./skills.css";
interface Props {
  skills: string[];
}

export const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 className="title-1">Skills</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => (
          <li
            key={skill}
            style={{
              background: "#ddd",
              padding: "5px 10px",
              borderRadius: 4,
              fontSize: "0.9rem",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
