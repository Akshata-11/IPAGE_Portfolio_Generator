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
        src={
          data.profileImage ||
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        }
        // "https://via.placeholder.com/150"}
        alt={data.name}
        style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h1 className="name">{data.name}</h1>
      <h3 className="title" style={{ textDecoration: "underline" }}>
        {data.title}
      </h3>
      <p className="tag">{data.tagline}</p>
    </section>
  );
};
