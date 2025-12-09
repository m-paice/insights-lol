import { useEffect, useMemo, useRef, useState } from "react";
import type { Champion } from "../data/champions";

const MAX_VISIBLE_ITEMS = 3;

export interface ChampionProps {
  data: Champion[];
  selectedChampion: Champion;
  changeChampion: (champion: Champion) => void;
}

export const Champions = ({
  data,
  selectedChampion,
  changeChampion,
}: ChampionProps) => {
  const timeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
        changeChampion(data[nextIndex]);
        return nextIndex;
      });
    }, 15_000);
  }, [activeIndex]);

  const visibleItems = useMemo(() => {
    const totalItems = data.length;
    const halfVisible = Math.floor(MAX_VISIBLE_ITEMS / 2);

    let start = activeIndex - halfVisible;
    let end = activeIndex + halfVisible;

    if (activeIndex < halfVisible) {
      start = 0;
      end = Math.min(totalItems - 1, MAX_VISIBLE_ITEMS - 1);
    } else if (activeIndex >= totalItems - halfVisible) {
      start = Math.max(0, totalItems - MAX_VISIBLE_ITEMS);
      end = totalItems - 1;
    }

    return data.slice(start, end + 1).map((item, index) => ({
      value: item,
      index: start + index,
    }));
  }, [activeIndex, data]);

  const navigate = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < data.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section
      style={{
        display: "flex",
      }}
    >
      {visibleItems.map((champion) => (
        <div
          key={champion.value.name}
          style={{
            backgroundImage: `url(${champion.value.image})`,
            width: "7vw",
            height: "calc(100vh - 40px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: 20,
            transition: "border 0.3s ease-in-out",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",

            borderBottom:
              champion.value.name === selectedChampion.name
                ? "4px solid #ffc000"
                : "",
            cursor: "pointer",
          }}
          onClick={() => {
            changeChampion(champion.value);
            navigate(champion.index);
          }}
        >
          <h2
            style={{
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              textAlign: "center",
              color: "#ffc000",
              fontSize: "2vw",
            }}
          >
            {champion.value.name}
          </h2>
        </div>
      ))}
    </section>
  );
};
