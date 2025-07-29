import React from "react";
import { PortfolioData } from "../../types";
import {
  HeroSection,
  AboutMe,
  Skills,
  Services,
  Portfolio,
  Testimonials,
  Blogs,
  Contacts,
  Footer,
} from "../sections";

import "./TemplateOne.css";

interface Props {
  data: PortfolioData;
}

const TemplateOne: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          maxWidth: 900,
          margin: "auto",
          padding: 20,
        }}
        className="grid-style"
      >
        <div className="herosection">
          <HeroSection data={data.hero} />
        </div>
        <div className="aboutme">
          <AboutMe data={data.about} />
        </div>
        <div className="skill">
          <Skills skills={data.skills} />
        </div>
        <div className="service">
          <Services services={data.services} />
        </div>
        <div className="portfolio portfolio-col">
          <Portfolio projects={data.portfolio} />
        </div>
        <div className="portfolio testimonials">
          <Testimonials testimonials={data.testimonials} />
        </div>
        <div className="portfolio blog">
          <Blogs blog={data.blog} />
        </div>
        <div className="portfolio contact">
          <Contacts contact={data.contact} />
        </div>
        <div className="portfolio">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TemplateOne;
