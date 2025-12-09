import { useEffect, useMemo, useState } from "react";

// componets
import { Habilities } from "./Components/Habilities";
import { CurrentHability } from "./Components/CurrentHability";
import { Changes } from "./Components/Changes";
import { Champions } from "./Components/Champions";
// import { Actions } from "./Components/Actions";
// data
import { champions, type Champion } from "./data/champions";

export const App = () => {
  const [selectedChampion, setSelectedChampion] = useState<Champion>(
    champions[0]
  );
  const [selectedHability, setSelectedHability] = useState(
    selectedChampion.updates[0].hability.name
  );

  useEffect(() => {
    setSelectedHability(selectedChampion.updates[0].hability.name);
  }, [selectedChampion]);

  const currentUpdate = useMemo(() => {
    return selectedChampion.updates.find(
      (update) => update.hability.name === selectedHability
    );
  }, [selectedHability, selectedChampion]);

  return (
    <div style={styles.container({ image: selectedChampion.image })}>
      <main
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          gap: 20,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          zIndex: 1,
          padding: 20,
        }}
      >
        <Champions
          data={champions}
          selectedChampion={selectedChampion}
          changeChampion={setSelectedChampion}
        />
        <section
          style={{
            width: "100%",
            display: "grid",
            gridTemplateRows: "5vw auto 6vw",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                color: "#ffc000",
                fontSize: "3.8vw",
              }}
            >
              {selectedChampion.name.toUpperCase()}
            </h3>
            {/* <Actions
              champions={champions}
              selectedChampion={selectedChampion}
              setSelectedChampion={setSelectedChampion}
            /> */}
          </div>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {currentUpdate && (
              <CurrentHability data={currentUpdate!.hability} />
            )}

            {currentUpdate && <Changes data={currentUpdate!} />}
          </div>
          <Habilities
            data={selectedChampion.updates.map((item) => item.hability)}
            selectedHability={selectedHability}
            changeHability={setSelectedHability}
          />
        </section>
      </main>
    </div>
  );
};

export const styles: Record<string, (props: any) => React.CSSProperties> = {
  container: ({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transition: "background-image 0.5s ease-in-out",
  }),
};
