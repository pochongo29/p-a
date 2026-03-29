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
  const [userRating, setUserRating] = useState<number>(0);

  const storageKey = `pua_rating_${dishId}`;

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setVoted(true);
      setUserRating(Number(stored));
    }
    fetch(`/api/ratings?dishId=${encodeURIComponent(dishId)}`)
      .then((r) => r.json())
      .then((d) => {
        setAverage(d.average);
        setCount(d.count);
      })
      .catch(() => {});
  }, [dishId, storageKey]);

  const handleRate = async (star: number) => {
    if (voted) return;
    localStorage.setItem(storageKey, String(star));
    setVoted(true);
    setUserRating(star);
    try {
      const res = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dishId, rating: star }),
      });
      const d = await res.json();
      setAverage(d.average);
      setCount(d.count);
    } catch {}
  };

  const displayRating = voted ? userRating : (hover || Math.round(average));

  return (
    <div className="flex items-center gap-3 mb-5">
      {/* Stars */}
      <div
        className="flex items-center gap-1"
        role="group"
        aria-label={voted ? `Tu calificación: ${userRating} de 5` : "Califica este platillo"}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={voted}
            onClick={() => handleRate(star)}
            onMouseEnter={() => !voted && setHover(star)}
            onMouseLeave={() => !voted && setHover(0)}
            aria-label={`${star} estrella${star > 1 ? "s" : ""}`}
            className={`text-xl leading-none transition-all duration-200 touch-manipulation focus:outline-none
              ${voted ? "cursor-default" : "cursor-pointer hover:scale-125"}
              ${star <= displayRating ? "text-gold-400" : "text-gold-500/20"}
            `}
          >
            ★
          </button>
        ))}
      </div>

      {/* Count + average */}
      {count > 0 && (
        <span className="text-[11px] text-cream-200/60 font-light">
          {average} &nbsp;·&nbsp; {count} {count === 1 ? "reseña" : "reseñas"}
        </span>
      )}

      {/* Feedback after voting */}
      {voted && (
        <span className="text-[10px] text-gold-500/72 font-light tracking-wide">
          ¡Gracias!
        </span>
      )}
    </div>
  );
}
