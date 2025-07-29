import React, { createContext, useState, useContext, ReactNode } from "react";
import { PortfolioData } from "../types";

interface PortfolioContextType {
  portfolios: PortfolioData[];
  addPortfolio: (data: PortfolioData) => void;
  editPortfolio: (id: string, data: PortfolioData) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);

  const addPortfolio = (data: PortfolioData) => {
    setPortfolios((prev) => [...prev, data]);
  };

  const editPortfolio = (id: string, updated: PortfolioData) => {
    setPortfolios((prev) => prev.map((p) => (p.id === id ? updated : p)));
  };

  return (
    <PortfolioContext.Provider
      value={{ portfolios, addPortfolio, editPortfolio }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context)
    throw new Error(
      "usePortfolioContext must be used within PortfolioProvider"
    );
  return context;
};
