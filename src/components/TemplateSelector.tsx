import React from "react";
import "./TemplateSelector.css";
interface Props {
  selectedTemplate: "template1" | "template2" | null;
  onSelect: (template: "template1" | "template2") => void;
}

export const TemplateSelector: React.FC<Props> = ({
  selectedTemplate,
  onSelect,
}) => {
  return (
    <div>
      <h2>Select a Template</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div
          className="template"
          style={{
            border:
              selectedTemplate === "template1"
                ? "3px solid blue"
                : "1px solid gray",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => onSelect("template1")}
        >
          <p>Template 1</p>
          <div style={{ width: 150, height: 200, background: "#eee" }}>
            <img
              src="https://plus.unsplash.com/premium_vector-1682307855136-994be304e0d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="300"
              height="200"
            />
          </div>
        </div>
        <div
          className="template"
          style={{
            border:
              selectedTemplate === "template2"
                ? "3px solid blue"
                : "1px solid gray",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => onSelect("template2")}
        >
          <p>Template 2</p>
          <div style={{ width: 150, height: 200, background: "#ccc" }}>
            <img
              src="https://plus.unsplash.com/premium_vector-1682298545718-d32ae0b5a44a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width="300"
              height="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
