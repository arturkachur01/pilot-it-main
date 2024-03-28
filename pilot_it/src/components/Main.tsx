import React from "react";

const Main: React.FC = () => {
  return (
    <main className="main flex flex-1 items-center justify-center">
      <div
        className="mb-10 h-full w-full px-4 py-8 text-center sm:px-10 sm:py-16"
        style={{
          backgroundImage: `url(bg.svg), linear-gradient(to bottom, #d5d6e4, #d5d6e4)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="mb-8 mt-4 text-4xl font-bold leading-8 text-[#23155b] sm:mb-16 sm:mt-8 sm:text-6xl">
          PilotIT
        </h1>
        <p className="mb-6 text-2xl font-medium leading-7 text-[#23155b] sm:mb-10 sm:text-3xl">
          Connect with investors, developers, and AI experts
        </p>
        <p className="mx-auto mb-4 w-full text-lg font-normal leading-7 text-[#23155b] sm:mb-6 sm:w-1/2 sm:text-xl">
          We&apos;re a boutique agency helping startups effectively raise funds,
          fuel product development, and enhance operations via AI
        </p>
        <div className="mt-8 flex justify-center sm:mt-16">
          <button className="h-16 w-56 rounded-lg bg-[#8053ff] text-lg font-medium leading-7 text-white hover:bg-[#6a46e0] sm:h-12 sm:w-48">
            Startup Fundraising
          </button>
          <button className="ml-4 h-16 w-56 rounded-lg border border-[#8053ff] text-lg font-medium leading-7 text-[#8053ff] hover:bg-gray-200 sm:ml-6 sm:h-12 sm:w-48">
            AI Consulting
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
