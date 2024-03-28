import React from "react";
import Image from "next/image";

const PartnerLogos: React.FC = () => {
  const logos = [
    {
      src: "/3x4_.svg",
      alt: "3x4",
      link: "https://www.startupreporter.eu/worlds-first-web3-0-fundraising-platform-3x4-for-charitable-organizations/",
    },
    {
      src: "/diligent.svg",
      alt: "Diligent Capital",
      link: "https://diligent.capital/",
    },
    {
      src: "/nova.svg",
      alt: "Nova",
      link: "https://novapoliklinika.com/",
    },
    {
      src: "/stargaze.svg",
      alt: "Stargaze",
      link: "https://joinstargaze.com/",
    },
    {
      src: "/m.kids.svg",
      alt: "M.Kids",
      link: "https://mandarinka.com.ua/",
    },
    {
      src: "/jewel.svg",
      alt: "Jewel",
      link: "https://www.engagejeweler.com/",
    },
  ];

  return (
    <div>
      <h2 className="mx-auto mb-6 w-full rounded-md bg-[#8053ff] p-3 text-center text-3xl font-bold text-zinc-100 sm:w-1/3">
        Our Clients
      </h2>
      <div className="inline-flex mt-6 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-10">
          {logos.map((logo, index) => (
            <li key={index} className="mx-2">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image src={logo.src} alt={logo.alt} width={200} height={130} />
              </a>
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-10"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index} className="mx-2">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image src={logo.src} alt={logo.alt} width={200} height={150} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnerLogos;
