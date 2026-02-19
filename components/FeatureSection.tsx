"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IconCake, IconToolsKitchen2, IconCheck  } from '@tabler/icons-react';
import WhatsApp1 from "../assets/WhatsApp Image 2026-01-24 at 11.22.44 AM.jpeg";
import WhatsApp2 from "../assets/WhatsApp Image 2026-01-24 at 11.25.52 AM.jpeg";
import WhatsApp3 from "../assets/WhatsApp Image 2026-01-24 at 11.26.28 AM.jpeg";
import WhatsApp4 from "../assets/WhatsApp Image 2026-01-24 at 11.31.38 AM.jpeg";
import WhatsApp5 from "../assets/WhatsApp Image 2026-01-24 at 11.32.12 AM.jpeg";

export default function FeatureSection() {
  const [open, setOpen] = useState<null | { src: StaticImageData; alt?: string }>(null);

  const features = [
    {
      id: 1,
      title: 'Fresh Ingredients',
      description: "We use only the finest, freshest ingredients in our cakes.",
      icon: <IconToolsKitchen2 stroke={2} size={32}/>,
    },
    {
      id: 2,
      title: 'Custom Orders',
      description: "Get your cake your way – perfectly personalized to your style.",
      icon: <IconCake stroke={2} size={32} />,
    },
    {
      id: 3,
      title: 'Reliable Service',
      description: "Easy online ordering and timely, trustworthy delivery.",
      icon: <IconCheck stroke={2} size={32} />,
    },
  ];

  const gallery = [WhatsApp1, WhatsApp2, WhatsApp3, WhatsApp4, WhatsApp5];

  return (
    <section className="flex flex-col items-center justify-center bg-linear-to-br from-pink-100 via-pink-50 to-pink-50 py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 py-12">
          {features.map((f) => (
            <div
              key={f.id}
              className="flex-1 flex flex-col items-center text-center bg-white/60 rounded-2xl p-8 hover:bg-white/80 transition-shadow duration-200 border border-pink-200 shadow-sm"
            >
              <div className="text-6xl mb-4" aria-hidden>
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 gap-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Cakes</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full items-center mt-4">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setOpen({ src: img, alt: `cake-${idx}` })}
                className="rounded-lg overflow-hidden shadow-lg bg-white/60 p-0 border-0 focus:outline-none"
              >
                <div className="relative w-44 h-36 md:w-48 md:h-40">
                  <Image src={img.src} alt={`cake-${idx}`} className="object-cover" fill sizes="(max-width: 768px) 50vw, 20vw" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {open && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setOpen(null)}
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-2 shadow"
                onClick={() => setOpen(null)}
                aria-label="Close image"
              >
                ✕
              </button>

              <div className="relative w-full h-[60vh] md:h-[70vh] rounded-lg overflow-hidden">
                <Image src={open.src} alt={open.alt ?? "cake"} fill className="object-contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
