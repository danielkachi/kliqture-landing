"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto mt-12 max-w-4xl divide-y divide-white/10 rounded-[28px] border border-white/10 bg-white/[0.035]">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-white transition hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:px-7"
            >
              <span>{item.question}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 text-lg text-white/72">
                {open ? "-" : "+"}
              </span>
            </button>
            {open ? (
              <div className="px-5 pb-6 text-sm leading-7 text-white/62 md:px-7 md:text-base">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
