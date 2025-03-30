import React from "react";
import "./NewspaperBackground.css";

const lines = [
  "You are not a failure, no matter how heavy your heart feels right now.",
  "This world has a way of dimming even the brightest souls, but your light still flickers inside.",
  "Sometimes getting out of bed is a victory. Sometimes breathing is an act of rebellion.",
  "Even when everything feels like it’s falling apart, your presence here is proof you haven't given up.",
  "There’s something in you that refuses to let go. That’s your strength.",
  "You are not broken — you are becoming. Becoming someone wiser. Gentler. More whole.",
  "Healing is not linear, and peace is still possible.",
  "You matter more than you realize. You are loved in ways you haven’t discovered yet.",
  "Your story isn’t over. This is the pause before your comeback.",
  "Don’t let the darkness convince you that you don’t deserve the light.",
];

const NewspaperBackground = () => {
  const repeatedLines = Array(40).fill(null).map((_, i) => lines[i % lines.length]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-transparent overflow-hidden">
      <div className="w-full h-full flex flex-col justify-start gap-2 px-4">
        {repeatedLines.map((line, index) => (
          <div
            key={index}
            className={`line whitespace-nowrap font-mono text-sm tracking-wide ${
              index % 2 === 0 ? "scroll-left" : "scroll-right"
            }`}
          >
            {line.repeat(50)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewspaperBackground;
