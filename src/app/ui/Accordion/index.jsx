import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'What services does A2 Labz provide?',
    answer:
      'We offer end-to-end digital solutions including custom software development, mobile apps, AI & Data Science solutions, E-Commerce platforms, UX/UI design, SEO, branding, and cloud integrations. Our team delivers tailored solutions based on your business goals.',
  },
  {
    question: 'How do you start a new project with a client?',
    answer:
      'We begin with a detailed consultation to understand your requirements, goals, and expectations. After analyzing your needs, we present a project plan with timeline, cost, and milestones. Once approved, our team begins the design and development process with regular updates.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Yes. We provide continuous support, updates, bug fixes, performance optimization, and security maintenance to ensure your product remains reliable and scalable. Support packages can be customized based on your needs.',
  },
  {
    question: 'How long does it take to complete a software or web project?',
    answer:
      'Timelines vary depending on project size and complexity. A simple website may take 2–4 weeks, while custom software or AI solutions may require 1–4 months. We provide a clear timeline after understanding your requirements and stick to milestones with transparent communication.',
  },
  {
    question: 'Can you work with international clients and remote teams?',
    answer:
      'Absolutely. We have successfully delivered projects for clients across multiple countries. We use modern collaboration tools, provide weekly demos, and maintain clear communication to ensure smooth progress regardless of time zones.',
  }
];


export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
