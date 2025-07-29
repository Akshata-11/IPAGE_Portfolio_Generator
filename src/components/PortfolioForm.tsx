import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  PortfolioData,
  HeroSection,
  AboutSection,
  Service,
  Project,
  Testimonial,
  Blog,
  Contact,
} from "../types";
import { v4 as uuidv4 } from "uuid";

import "./PortfolioForm.css";
interface Props {
  selectedTemplate: "template1" | "template2";
  onSubmit: (data: PortfolioData) => void;
}

const emptyHero: HeroSection = {
  name: "",
  title: "",
  tagline: "",
  profileImage: "",
};

const emptyAbout: AboutSection = {
  bio: "",
  email: "",
  phone: "",
  location: "",
  socials: [],
};

const emptyServices: Service[] = [
  { title: "", description: "" },
  { title: "", description: "" },
  { title: "", description: "" },
];

const emptyProjects: Project[] = [
  { title: "", image: "", description: "" },
  { title: "", image: "", description: "" },
  { title: "", image: "", description: "" },
];

const emptyTestimonials: Testimonial[] = [{ client: "", quote: "" }];

const emptyBlog: Blog = {
  title: "",
  summary: "",
};

const emptyContact: Contact = {
  message: "",
  email: "",
  phone: "",
};

export const PortfolioForm: React.FC<Props> = ({
  selectedTemplate,
  onSubmit,
}) => {
  const [hero, setHero] = useState<HeroSection>(emptyHero);
  const [about, setAbout] = useState<AboutSection>(emptyAbout);
  const [skills, setSkills] = useState<string[]>([]);
  const [services, setServices] = useState<Service[]>(emptyServices);
  const [portfolio, setPortfolio] = useState<Project[]>(emptyProjects);
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(emptyTestimonials);
  const [blog, setBlog] = useState<Blog>(emptyBlog);
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [skillInput, setSkillInput] = useState("");

  const handleSkillAdd = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newPortfolio: PortfolioData = {
      id: uuidv4(),
      template: selectedTemplate,
      hero,
      about,
      skills,
      services,
      portfolio,
      testimonials,
      blog,
      contact,
    };
    onSubmit(newPortfolio);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "auto" }}>
      <div className="details">
        <div className="details-fill">
          <h2>Hero Section</h2>
          <input
            type="text"
            placeholder="Name"
            value={hero.name}
            onChange={(e) => setHero({ ...hero, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={hero.title}
            onChange={(e) => setHero({ ...hero, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Tagline"
            value={hero.tagline}
            onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
          />
          <input
            type="text"
            placeholder="Profile Image URL"
            value={hero.profileImage}
            onChange={(e) => setHero({ ...hero, profileImage: e.target.value })}
          />
        </div>
        <div className="details-fill">
          <h2>About Me</h2>
          <textarea
            placeholder="Bio"
            value={about.bio}
            onChange={(e) => setAbout({ ...about, bio: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={about.email}
            onChange={(e) => setAbout({ ...about, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={about.phone}
            onChange={(e) => setAbout({ ...about, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            value={about.location}
            onChange={(e) => setAbout({ ...about, location: e.target.value })}
          />
          <input
            type="text"
            placeholder="Socials (comma separated URLs)"
            value={about.socials.join(", ")}
            onChange={(e) =>
              setAbout({
                ...about,
                socials: e.target.value.split(",").map((s) => s.trim()),
              })
            }
          />
        </div>
        <div className="details-fill">
          <h2>Skills</h2>
          <input
            type="text"
            value={skillInput}
            placeholder="Add skill"
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button className="btn-skill" type="button" onClick={handleSkillAdd}>
            Add Skill
          </button>
          <div>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  marginRight: 8,
                  background: "#ddd",
                  padding: "4px 8px",
                  borderRadius: 4,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="details-fill">
          <h2>Services</h2>
          {services.map((service, idx) => (
            <div key={idx}>
              <input
                type="text"
                placeholder="Service Title"
                value={service.title}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[idx].title = e.target.value;
                  setServices(newServices);
                }}
              />
              <textarea
                placeholder="Service Description"
                value={service.description}
                onChange={(e) => {
                  const newServices = [...services];
                  newServices[idx].description = e.target.value;
                  setServices(newServices);
                }}
              />
            </div>
          ))}
        </div>
        <div className="details-fill">
          <h2>Portfolio Projects</h2>
          {portfolio.map((proj, idx) => (
            <div key={idx}>
              <input
                type="text"
                placeholder="Project Title"
                value={proj.title}
                onChange={(e) => {
                  const newPortfolio = [...portfolio];
                  newPortfolio[idx].title = e.target.value;
                  setPortfolio(newPortfolio);
                }}
              />
              <input
                type="text"
                placeholder="Project Image URL"
                value={proj.image}
                onChange={(e) => {
                  const newPortfolio = [...portfolio];
                  newPortfolio[idx].image = e.target.value;
                  setPortfolio(newPortfolio);
                }}
              />
              <textarea
                placeholder="Project Description"
                value={proj.description}
                onChange={(e) => {
                  const newPortfolio = [...portfolio];
                  newPortfolio[idx].description = e.target.value;
                  setPortfolio(newPortfolio);
                }}
              />
            </div>
          ))}
        </div>

        <div className="details-fill">
          <h2>Testimonials</h2>
          {testimonials.map((test, idx) => (
            <div key={idx}>
              <input
                type="text"
                placeholder="Client Name"
                value={test.client}
                onChange={(e) => {
                  const newTests = [...testimonials];
                  newTests[idx].client = e.target.value;
                  setTestimonials(newTests);
                }}
              />
              <textarea
                placeholder="Quote"
                value={test.quote}
                onChange={(e) => {
                  const newTests = [...testimonials];
                  newTests[idx].quote = e.target.value;
                  setTestimonials(newTests);
                }}
              />
            </div>
          ))}
        </div>
        <div className="details-fill">
          <h2>Blog</h2>
          <input
            type="text"
            placeholder="Blog Title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <textarea
            placeholder="Blog Summary"
            value={blog.summary}
            onChange={(e) => setBlog({ ...blog, summary: e.target.value })}
          />
        </div>
        <div className="details-fill">
          <h2>Contact</h2>
          <textarea
            placeholder="Message"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
      </div>
      <button type="submit" style={{ marginTop: 20, padding: "0.5rem 1rem" }}>
        Submit Portfolio
      </button>
    </form>
  );
};
