import React from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const Rating = ({ rating = 0, max = 5, color = "orange" }) => {
  const stars = Array.from({ length: max }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) return <MdStar className="h-5 w-5" key={starValue} style={{ color }} />; // Full star
    if (rating >= starValue - 0.5) return <MdStarHalf className="h-5 w-5" key={starValue} style={{ color }} />; // Half star
    return <MdStarBorder className="h-5 w-5" key={starValue} style={{ color: "gray" }} />; // Empty star
  });

  return <div className="flex">{stars}</div>;
};

export default Rating;
