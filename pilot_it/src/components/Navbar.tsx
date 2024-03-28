import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar: React.FC = () => {
  const handleButtonClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between bg-white p-1 shadow-md sm:px-6`}
    >
      <Link href="/">
        <div className="sm:mx-6">
          <Image src="/logo.svg" alt="Logo" width={150} height={150} />
        </div>
      </Link>
      <div className="hidden items-center align-middle sm:flex">
        <button
          onClick={() => handleButtonClick("services-section")}
          className={`text-md font-medium leading-7 text-[#23155b] text-opacity-100 hover:text-[#23155b] hover:text-opacity-70`}
        >
          Services
        </button>
        <button
          onClick={() => handleButtonClick("cases-section")}
          className={`text-md ml-4 font-medium leading-7 text-[#23155b] text-opacity-100 hover:text-opacity-70`}
        >
          Cases
        </button>
      </div>
      <div className="flex-grow sm:hidden"></div>
      <button
        onClick={() => handleButtonClick("contact-section")}
        className="mx-auto h-12 w-auto rounded-lg bg-[#8053ff] px-6 text-lg font-medium leading-7 text-white hover:bg-[#6a46e0] sm:mx-6"
      >
        Contact
      </button>
      <div className="flex-grow sm:hidden"></div>
      <div className="sm:hidden">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Menu
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => handleButtonClick("services-section")}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } group flex items-center px-2 py-2 text-sm font-medium`}
                        >
                          Services
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => handleButtonClick("cases-section")}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } group flex items-center px-2 py-2 text-sm font-medium`}
                        >
                          Cases
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
