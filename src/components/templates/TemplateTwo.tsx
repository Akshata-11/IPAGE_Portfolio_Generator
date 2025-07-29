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
} from "../sections"; // ✅ Only works if index.ts exists
import "./TemplateTwo.css";

interface Props {
  data: PortfolioData;
}

const TemplateTwo: React.FC<Props> = ({ data }) => {
  // Different style/layout from TemplateOne
  return (
    <>
      <div
        className="mdiv"
        style={{
          fontFamily: "Georgia, serif",
          maxWidth: 900,
          margin: "auto",
          padding: 20,
          backgroundColor: "#fafafa",
        }}
      >
        <div className="cdiv">
          <HeroSection data={data.hero} />
        </div>
        <div className="cdiv skills">
          <Skills skills={data.skills} />
        </div>
        <div className="cdiv aboutme ">
          <AboutMe data={data.about} />
        </div>

        <div className="cdiv portfolio-1">
          <Portfolio projects={data.portfolio} />
        </div>
        <div className="cdiv">
          <Services services={data.services} />
        </div>
        <div className="cdiv">
          <Testimonials testimonials={data.testimonials} />
        </div>
        <div className="cdiv blog">
          <Blogs blog={data.blog} />
        </div>
        <div className="cdiv contact">
          <Contacts contact={data.contact} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TemplateTwo;
