"use client";

import "@smastrom/react-rating/style.css";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";

export function Rating({ value }: { value: number }) {
  if (!value) value = 0;
  const [rating, setRating] = useState(value);

  return (
    <ReactRating
      style={{ maxWidth: 200 }}
      spaceInside="large"
      value={rating}
      onChange={setRating}
      transition="position"
    />
  );
}
