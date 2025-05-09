"use client";
import React, { useState } from "react";
import UseSwipe from "../../hooks/UseSwipe";
import "./_carousel.scss";

interface CarouselProps {
  components: (() => React.ReactNode)[];
}

export default function CarouselPlanning({
  components
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeHandlers = UseSwipe({
    onSwipedLeft: () => {
      if (currentIndex < components.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  });

  return (
    <div className="carousel" {...swipeHandlers}>
      <div className="carousel-current-day">
        {components[currentIndex]()}
      </div>
      <div className="carousel-navigation">
        {components.map((_, k) => (
          <div
            key={k}
            className={
              "carousel-navigation-dot " +
              (k === currentIndex
                ? "carousel-navigation-dot-active"
                : "")
            }
            onClick={() => setCurrentIndex(k)}
          />
        ))}
      </div>
    </div>
  );
}
