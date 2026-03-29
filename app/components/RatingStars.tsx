"use client";

import { useEffect, useState } from "react";

interface RatingStarsProps {
  dishId: string;
}

export function RatingStars({ dishId }: RatingStarsProps) {
  const [average, setAverage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [voted, setVoted] = useState<boolean>(false);

  const storageKey = `pua_rating_${dishId}`;

  useEffect(() => {
    const hasVoted = !!localStorage.getItem(storageKey);
    setVoted(hasVoted);
    fetch(`/api/ratings?dishId=${encodeURIComponent(dishId)}`)
      .then((r) => r.json())
      .then((d) => {
        setAverage(d.average);
        setCount(d.count);
      });
  }, [dishId, storageKey]);

  const handleClick = async (star: number) => {
    if (voted) return;
    localStorage.setItem(storageKey, String(star));
    setVoted(true);
    const res = await fetch("/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dishId, rating: star }),
    });
    const d = await res.json();
    setAverage(d.average);
    setCount(d.count);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => !voted && setHover(star)}
          onMouseLeave={() => !voted && setHover(0)}
          onClick={() => handleClick(star)}
          style={{
            cursor: voted ? "default" : "pointer",
            fontSize: "18px",
            color:
              star <= (hover || Math.round(average))
                ? "#C8A24E"
                : "rgba(200,162,78,0.2)",
            transition: "color 0.2s",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
      {count > 0 && (
        <span
          style={{
            fontSize: "11px",
            color: "rgba(245,235,215,0.4)",
            fontWeight: 200,
            letterSpacing: "0.05em",
          }}
        >
          {average} &nbsp;·&nbsp; {count} {count === 1 ? "reseña" : "reseñas"}
        </span>
      )}
    </div>
  );
}
