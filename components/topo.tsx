"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";



export default function Topo() {

  return (
    <section
      
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      
      <div className="flex items-center justify-center">
        <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-right mt-4 lg:mt-0"
        >
            <Image
              src="/eu.png"
              alt="eu"
              width={300}
              height={300}
              quality="95"
              priority={true}
              className="
               rounded-full object-cover border-4  
              border-transparent shadow-2xl hover:shadow-3xl transition-shadow 
              duration-300 ease-in-out bg-gradient-to-r from-lightblue-400 via-purple-400 to-teal-400 hover:scale-105 transform"
              />
          </motion.div>

    </section>
  );
}
