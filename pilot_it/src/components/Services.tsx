import React, { useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services: React.FC = () => {
  const [activeTab1, setActiveTab1] = useState("fundraising");
  const [activeTab2, setActiveTab2] = useState("Startup Fundraise");
  const [activeTab3, setActiveTab3] = useState("Fundraising");

  const handleTabClick1 = (tab: string) => {
    setActiveTab1(tab);
  };

  const handleTabClick2 = (tab: string) => {
    setActiveTab2(tab);
  };

  const handleTabClick3 = (tab: string) => {
    setActiveTab3(tab);
  };

  const TabRow: React.FC<{
    title: string;
    description: string;
    items: string[];
  }> = ({ title, description, items }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={ref}
        className="flex flex-col items-start space-y-4 rounded-md bg-white p-4"
      >
        <div className="w-full rounded-md bg-[#E9E2FE] p-3">
          <h3 className="pb-3 text-3xl font-medium leading-6 text-[#8053FF]">
            {title}
          </h3>
          <p className="text-lg leading-6 text-[#8053FF]">{description}</p>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-start space-x-2 rounded-md bg-white p-4 shadow-lg"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3BB878] px-3 text-white">
              ✓
            </div>
            <p className="font-light text-[#23155b]">{item}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-delay="50"
      id="services-section"
      className="mx-4 mt-12 border-spacing-2 rounded-3xl bg-white px-4 py-6 sm:mx-28 sm:px-36"
    >
      <div className="mx-auto w-full justify-center rounded-lg p-3 align-middle sm:w-2/3">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 sm:align-top">
          <div
            className={`w-full rounded-[14px] p-3 ${
              activeTab2 === "Startup Fundraise"
                ? "bg-[#8053ff]"
                : "bg-[#E9E2FE]"
            } cursor-pointer`}
            onClick={() => handleTabClick2("Startup Fundraise")}
          >
            <p
              className={`text-center text-xl font-medium leading-9 ${
                activeTab2 === "Startup Fundraise"
                  ? "text-white"
                  : "text-[#23155b]"
              }`}
            >
              Startup Fundraise
            </p>
          </div>
          <div
            className={`w-full rounded-[14px] p-3 ${
              activeTab2 === "AI Consulting + IT Outsourcing"
                ? "bg-[#8053ff]"
                : "bg-[#E9E2FE]"
            } cursor-pointer`}
            onClick={() => handleTabClick2("AI Consulting + IT Outsourcing")}
          >
            <p
              className={`text-center text-xl font-medium leading-9 ${
                activeTab2 === "AI Consulting + IT Outsourcing"
                  ? "text-white"
                  : "text-[#23155b]"
              }`}
            >
              AI Consulting + IT Outsourcing
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {activeTab2 === "Startup Fundraise" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TabRow
              title="Fundraise Light"
              description="Get a tailored list of investors upon your startup’s custom needs enhanced by AI."
              items={[
                "Free list of 50 best-fit investors upon filling out the brief Google form.",
                "Free list of 500 best-fit investors for your custom criteria if you book a 30-minute call with our fundraising expert to discuss how we can help you further.",
                "Search for angels and VCs based on your chosen stage, industry, geography, and many more.",
              ]}
            />
            <TabRow
              title="Full-Stack Fundraising"
              description="Support your fundraising journey from A to Z with our team."
              items={[
                "A free 1-hour strategic session where we will discuss your company needs, plan, and approach to fundraising.",
                "Constant access to the database with 20k+ verified angels and VCs categorized by relevant parameters, updated regularly.",
                "Support with all aspects of startup fundraising from pitch deck and financial model to strategy to investor outreach and investor relations management.",
              ]}
            />
          </div>
        )}
        {activeTab2 === "AI Consulting + IT Outsourcing" && (
          <div className="mt-4">
            <TabRow
              title="AI Consulting + IT Outsourcing"
              description="Solution development provided by Ukrainian engineers."
              items={[
                "Consulting Session & Project Estimation. During the discovery call with a client, we provide a free AI consulting session on a client’s tech challenges. We develop a detailed roadmap which includes not only transparent pricing but also project stages, delivery timeline, and team breakdown. Upon agreeing on the roadmap, we sign a contract and set up a project team.",
                "Solution Architecture Design. We start the project with the initial solution architecture design document which consists of the data processing pipeline, monitoring service & hypotheses, and best fitting Machine Learning / Deep Learning architectures.",
                "Ongoing development and support until the end. Our commitment to your project doesn't end with its initiation. We provide continuous support throughout the project lifecycle, ensuring it reaches its full potential. Our ongoing development and support services are designed to adapt to your evolving needs, making sure your project stays ahead of the curve.",
              ]}
            />
          </div>
        )}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <a
          href="https://docs.google.com/forms/d/1qxSdN66a6yQ8w5W33_q8lR3gMiXdhTVi7jFyt5hYvX0/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="h-24 w-full rounded-lg bg-[#8053ff] px-5 py-1 text-2xl font-medium leading-7 text-white hover:bg-[#6a46e0] sm:w-48">
            Fill Out the Google Form
          </button>
        </a>
        <a
          href="https://calendly.com/arturkachur/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="h-24 w-full rounded-lg border-2 border-[#8053FF] bg-[#FFFFFF] px-5 py-1 text-2xl font-medium leading-7 text-[#8053FF] hover:bg-[#efecf8] sm:w-48">
            Book a Call with Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Services;
