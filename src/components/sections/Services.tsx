import React from "react";
import { Service } from "../../types";

interface Props {
  services: Service[];
}

export const Services: React.FC<Props> = ({ services }) => {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2>Services</h2>
      {services.map((s, i) => (
        <div key={i} style={{ marginBottom: 15 }}>
          <h4>{s.title}</h4>
          <p style={{ marginBottom: 40, letterSpacing: 1, color: "#495057" }}>
            {s.description}
          </p>
        </div>
      ))}
    </section>
  );
};
