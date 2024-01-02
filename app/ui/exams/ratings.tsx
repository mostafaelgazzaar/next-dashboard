"use client";

import "@smastrom/react-rating/style.css";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";

export function Rating({
  value,
  disabled,
}: {
  value: number;
  disabled: boolean;
}) {
  if (!value) value = 0;
  const [rating, setRating] = useState(Math.round(value));

  return (
    <ReactRating
      style={{ maxWidth: 200 }}
      spaceInside="large"
      value={rating}
      onChange={setRating}
      transition="position"
      isDisabled={disabled}
    />
  );
}
