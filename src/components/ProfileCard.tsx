import React from "react";
import { PortfolioData } from "../types";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

interface Props {
  portfolio: PortfolioData;
}

export const ProfileCard: React.FC<Props> = ({ portfolio }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/portfolio/${portfolio.id}`)}
    >
      <img
        src={portfolio.hero.profileImage || "https://via.placeholder.com/80"}
        alt={portfolio.hero.name}
        style={{
          borderRadius: "50%",
          width: 80,
          height: 80,
          objectFit: "cover",
          marginRight: "1rem",
        }}
      />
      <div>
        <h3>{portfolio.hero.name}</h3>
        <p>{portfolio.hero.title}</p>
        <p>{portfolio.about.bio.substring(0, 100)}...</p>
        <div style={{ marginTop: 8 }}>
          {portfolio.skills.map((skill) => (
            <span
              key={skill}
              style={{
                marginRight: 8,
                backgroundColor: "#eee",
                padding: "3px 7px",
                borderRadius: 4,
                fontSize: "0.8rem",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <button style={{ marginLeft: "auto" }}>View Portfolio</button>
    </div>
  );
};
