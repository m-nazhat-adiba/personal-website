import React from "react";

export const ProfileFrame = ({
  className,
  gradientColors,
  gradientId = "customGradient",
  gradientOpacity = [1, 1],
}) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
        {/* Define the gradient */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="20%"
              stopColor={gradientColors[0]}
              stopOpacity={gradientOpacity[0]}
            />
            <stop
              offset="100%"
              stopColor={gradientColors[1]}
              stopOpacity={gradientOpacity[1]}
            />
          </linearGradient>
        </defs>

        {/* Apply the gradient to the shape */}
        <path
          d="M2.95483 45.1542C3.3816 22.0273 22.0272 3.38163 45.1542 2.95485L175.442 0.550594C187.12 0.335115 198.383 4.87903 206.641 13.1377L367.284 173.781C375.543 182.039 380.087 193.302 379.871 204.98L377.467 335.268C377.04 358.395 358.395 377.04 335.268 377.467L204.979 379.871C193.302 380.087 182.039 375.543 173.781 367.284L13.1376 206.641C4.87899 198.383 0.335068 187.12 0.550557 175.442L2.95483 45.1542Z"
          fill={`url(#${gradientId})`} // Use the gradient
        />
      </svg>
    </div>
  );
};
