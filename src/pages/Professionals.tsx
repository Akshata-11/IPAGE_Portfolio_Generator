import React from "react";
import { usePortfolioContext } from "../context/PortfolioContext";
import { ProfileCard } from "../components/ProfileCard";

const Professionals: React.FC = () => {
  const { portfolios } = usePortfolioContext();

  return (
    <div className="container">
      <h1>Professionals</h1>
      {portfolios.length === 0 && <p>No profiles created yet.</p>}
      {portfolios.map((p) => (
        <ProfileCard key={p.id} portfolio={p} />
      ))}
    </div>
  );
};

export default Professionals;
