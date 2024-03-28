import React, { useState } from "react";
import Image from "next/image";
import AOS from "aos";

const CaseStudies: React.FC = () => {
  const CaseStudy: React.FC<{
    industry: string;
    logo: {
      src: string;
      link: string;
    };
    title: string;
    description: string;
    index: number;
  }> = ({ industry, logo, title, description, index }) => (
    <div
      className={`flex flex-col sm:flex-row ${
        index % 2 === 0 ? "sm:flex-row-reverse" : ""
      } items-start space-y-4 rounded-md bg-white shadow-md`}
    >
      <div className="flex h-full bg-[#E9E2FE] w-full items-center justify-center px-6 py-12 sm:w-1/2">
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <Image src={logo.src} alt="Logo" width={300} height={200} />
        </a>
      </div>
      <div className="w-full p-4 sm:w-1/2">
        <div className="h-full w-full rounded-md bg-white p-3">
          <h3 className="pb-3 text-3xl font-bold leading-normal text-[#8053FF]">
            {title}
          </h3>
          <p className="text-md font-light leading-6 text-zinc-800">
            {description}
          </p>
        </div>
        <div className="mt-8 inline-block rounded-md bg-[#E9E2FE] px-6 py-1">
          <p className="text-lg font-bold leading-6 text-[#8053FF]">
            #{industry}
          </p>
        </div>
      </div>
    </div>
  );

  const caseStudies = [
    {
      industry: "Fintech, non-profit",
      logo: {
        src: "/3x4_.svg",
        link: "https://www.startupreporter.eu/worlds-first-web3-0-fundraising-platform-3x4-for-charitable-organizations/",
      },
      title: "Blockchain Fundraising Solution",
      description:
        "MVP implementation for App-store and Web; blockchain solution for Ethereum and Solana; payment services integration; Ul/UX design for mobile and web; donators Ul, working places for charities and artists.",
    },
    {
      industry: "Childcare, EdTech",
      logo: {
        src: "/m.kids.svg",
        link: "https://mandarinka.com.ua/",
      },
      title: "Full-stack support in fundraising for M&A roll up",
      description:
        "Financial model built and review; pitch deck and one-pager, outreach to investors, on-going consulting support in presentations and fundraising, strategy development",
    },
    {
      industry: "Luxury",
      logo: {
        src: "/jewel.svg",
        link: "https://www.engagejeweler.com/",
      },
      title: "Engage - AI-powered Jewelry Tech",
      description:
        "Full-stack fundraising support; Sourcing databases of relevant investors; Creating a fundraising strategy and round structure; Outreach to investors; CRM management; Deck and one-pager revisions.",
    },
    {
      industry: "Fintech",
      logo: {
        src: "/stargaze.svg",
        link: "https://joinstargaze.com/",
      },
      title: "Stargaze - GenZ Investing App By Serial FinTech Entrepreneurs",
      description:
        "Full-stack fundraising support, sourcing databases of relevant investors, creating a fundraising strategy and round structure, outreach to investors, CRM management, deck and one-pager revisions.",
    },
    {
      industry: "Healthcare",
      logo: {
        src: "/nova.svg",
        link: "https://novapoliklinika.com/",
      },
      title: "POLSKA - Private Healthcare Institutions",
      description:
        "Financial model review implementation of capital raising structure support in capital raising for M&A roll up; pitch deck polishing",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-delay="200"
      id="cases-section"
      className="mx-4 mt-12 border-spacing-2 rounded-3xl px-4 py-6 sm:mx-28 sm:px-36"
    >
      <h2 className="mx-auto mb-6 w-full rounded-md bg-[#8053ff] p-3 text-center text-3xl font-bold text-zinc-100 sm:w-1/3">
        Case Studies
      </h2>
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              industry={study.industry}
              logo={study.logo}
              title={study.title}
              description={study.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
