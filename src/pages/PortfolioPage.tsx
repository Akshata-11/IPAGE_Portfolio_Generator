import React from "react";
import { useParams } from "react-router-dom";
import { usePortfolioContext } from "../context/PortfolioContext";
import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";

const PortfolioPage: React.FC = () => {
  const { id } = useParams();
  const { portfolios } = usePortfolioContext();

  const portfolio = portfolios.find((p) => p.id === id);

  if (!portfolio) {
    return <div className="container">Portfolio not found.</div>;
  }

  return (
    <div className="container">
      {portfolio.template === "template1" ? (
        <TemplateOne data={portfolio} />
      ) : (
        <TemplateTwo data={portfolio} />
      )}
    </div>
  );
};

export default PortfolioPage;
