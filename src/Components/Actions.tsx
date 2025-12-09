import { useState } from "react";
import type { Champion } from "../data/champions";
import { IconArrow } from "./Icons/IconArrow";

export interface ActionsProps {
  champions: Champion[];
  selectedChampion: Champion;
  setSelectedChampion: (champion: Champion) => void;
}

export const Actions = ({
  champions,
  selectedChampion,
  setSelectedChampion,
}: ActionsProps) => {
  const [mouseOverLeft, setMouseOverLeft] = useState(false);
  const [mouseOverRight, setMouseOverRight] = useState(false);

  return (
    <div>
      <button
        style={{
          width: "4.5vw",
          height: "4.5vw",
          marginLeft: 20,
          padding: 20,
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          transform: "rotate(180deg)",
          transition: "background 0.3s ease-in-out",
          background: mouseOverLeft ? "rgba(255, 255, 255, 0.3)" : "#ffc000",
        }}
        onMouseEnter={() => setMouseOverLeft(true)}
        onMouseLeave={() => setMouseOverLeft(false)}
        onClick={() => {
          const prevIndex =
            (champions.indexOf(selectedChampion) - 1 + champions.length) %
            champions.length;
          setSelectedChampion(champions[prevIndex]);
        }}
      >
        <IconArrow />{" "}
      </button>
      <button
        style={{
          width: "4.5vw",
          height: "4.5vw",
          marginLeft: 20,
          padding: 20,
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "background 0.3s ease-in-out",
          background: mouseOverRight ? "rgba(255, 255, 255, 0.3)" : "#ffc000",
        }}
        onMouseEnter={() => setMouseOverRight(true)}
        onMouseLeave={() => setMouseOverRight(false)}
        onMouseDown={() => {}}
        onClick={() => {
          const nextIndex =
            (champions.indexOf(selectedChampion) + 1) % champions.length;
          setSelectedChampion(champions[nextIndex]);
        }}
      >
        <IconArrow />{" "}
      </button>
    </div>
  );
};
