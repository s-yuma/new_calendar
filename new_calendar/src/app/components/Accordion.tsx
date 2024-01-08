"use client";
import React, { useState } from "react";

const Accordion = ({title, explanation}: {title: string, explanation: string}) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  return (
    <div className=" bg-gray-200 rounded-md p-4">
      <div className="py-2">
        <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
        >
        <span>{title}</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
        </button>
        <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 teext-sm
        ${
        accordionOpen
            ? " grid-rows-[1fr] opacity-100 "
            : "grid-rows-[0fr] opacity-0 "
        }
        `}
        >
          <div className=" overflow-hidden">{explanation}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
