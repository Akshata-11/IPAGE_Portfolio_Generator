import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: 20, borderTop: "1px solid #ccc" }}
    >
      <small>© {new Date().getFullYear()} Portfolio Generator</small>
    </footer>
  );
};
