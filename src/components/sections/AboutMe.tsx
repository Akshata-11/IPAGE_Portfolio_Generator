import React from "react";
import { AboutSection } from "../../types";
import "./AboutMe.css";

interface Props {
  data: AboutSection;
}

export const AboutMe: React.FC<Props> = ({ data }) => {
  return (
    <section style={{ marginBottom: 40, marginLeft: 40 }}>
      <h2>About Me</h2>
      <p>{data.bio}</p>
      {
        <p>
          <strong style={{ letterSpacing: 2 }}>Email:</strong> {data.email}
        </p>
      }

      <p>
        <strong style={{ letterSpacing: 2 }}>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong style={{ letterSpacing: 2 }}>Location:</strong> {data.location}
      </p>
      <p>
        <strong style={{ letterSpacing: 2 }}>Socials:</strong>{" "}
        {data.socials.join(", ")}
      </p>
    </section>
  );
};
