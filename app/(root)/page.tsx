import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Experience Next-Level Photo Editing with PicAI        
        </h1>
        <ul className="nav-links hidden md:flex-center w-full gap-20 mt-5">
          {navLinks.slice(1, 5).map((link) => (
            <Link 
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-2xl bg-white p-4">
                <Image
                  src={link.icon} alt="img" height={24} width={24}
                />
              </li>
                <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
