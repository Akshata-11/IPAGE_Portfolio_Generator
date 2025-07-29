import React from "react";
import { HeroSection as HeroSectionType } from "../../types";
import "./HeroSection.css";

interface Props {
  data: HeroSectionType;
}

export const HeroSection: React.FC<Props> = ({ data }) => {
  return (
    <section style={{ textAlign: "center", marginBottom: 40 }}>
      <img
        src={data.profileImage || "https://via.placeholder.com/150"}
        alt={data.name}
        style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          objectFit: "cover",
        }}
      />
      <h1 className="name">{data.name}</h1>
      <h3 className="title">{data.title}</h3>
      <p className="tag">{data.tagline}</p>
    </section>
  );
};
