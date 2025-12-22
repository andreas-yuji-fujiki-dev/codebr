// core
import { useState } from "react";

// objects
import { templatesList } from "./templatesList";

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function TemplatesCarousel() {
  const [current, setCurrent] = useState(0);
  const total = templatesList.length;

  const prev = () =>
    setCurrent((prev) => (prev - 1 + total) % total);

  const next = () =>
    setCurrent((prev) => (prev + 1) % total);

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  return (
    <div className="relative md:mt-16 flex items-center justify-center mx-auto md:max-w-[90%] overflow-hidden md:overflow-auto">
      {/* botão esquerda */}
      <button
        onClick={prev}
        className="absolute left-0 md:left-10 z-40 cursor-pointer text-white opacity-60 transition hover:opacity-100"
      >
        <IoIosArrowBack className="size-14 md:size-18" />
      </button>

      {/* track */}
      <div className="relative h-105 w-175 perspective-distant">
        {templatesList.map((item, index) => {
          const isActive = index === current;
          const isLeft = index === prevIndex;
          const isRight = index === nextIndex;

          // esconde os que não fazem parte dos 3
          if (!isActive && !isLeft && !isRight) return null;

          return (
            <div
              key={item.id}
              className={`
                absolute inset-0 m-auto
                h-full w-full rounded-2xl
                md:bg-neutral-900
                transition-all duration-500 ease-in-out
                flex items-center justify-center

                ${isActive && `
                  z-30 opacity-100 scale-100 translate-x-0
                `}

                ${isLeft && `
                  z-20 opacity-60 scale-[0.8] -translate-x-70
                `}

                ${isRight && `
                  z-20 opacity-60 scale-[0.8] translate-x-70
                `}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="md:h-full md:w-full rounded-2xl object-cover pointer-events-none"
              />

              <div className="absolute bottom-14 md:bottom-6 left-6 text-2xl font-semibold text-white drop-shadow-lg text-center md:text-left w-11/12 md:w-auto">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* botão direita */}
      <button
        onClick={next}
        className="absolute right-0 md:right-10 z-40 cursor-pointer text-white opacity-60 transition hover:opacity-100"
      >
        <IoIosArrowForward className="size-16 md:size-20" />
      </button>
    </div>
  );
}
