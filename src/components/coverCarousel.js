"use client";
import { useState, useEffect } from "react";
import site from "../data/site.yaml";
import Image from "@/components/image";

const IMAGES = site.pictures || [];

export default function CoverCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  // Auto-play effect: changes slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-md">
      {/* Wrapper with horizontal sliding transition */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {IMAGES.map((src, index) => (
          <div
            key={index}
            className="w-full shrink-0 relative min-h-75 max-h-125 aspect-video"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover min-h-75 max-h-125"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
        <button
          onClick={handlePrev}
          className="btn btn-circle bg-base-100/50 border-0 hover:bg-base-100"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-base-100/50 border-0 hover:bg-base-100"
        >
          ❯
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
