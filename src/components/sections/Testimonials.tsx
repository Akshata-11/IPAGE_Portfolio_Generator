import React from "react";
import { Testimonial } from "../../types";

interface Props {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<Props> = ({ testimonials }) => {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2>Testimonials</h2>
      {testimonials.map((test, i) => (
        <blockquote key={i} style={{ fontStyle: "italic", marginBottom: 20 }}>
          <p>"{test.quote}"</p>
          <footer>- {test.client}</footer>
        </blockquote>
      ))}
    </section>
  );
};
