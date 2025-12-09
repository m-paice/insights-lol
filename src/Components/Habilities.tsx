export interface HabilitiesProps {
  data: {
    name: string;
    image: string;
    description: string;
  }[];
  selectedHability: string;
  changeHability: (name: string) => void;
}

export const Habilities = ({
  data,
  selectedHability,
  changeHability,
}: HabilitiesProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((update, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderBottom:
              selectedHability === update.name ? "4px solid #ffc000" : "",
            cursor: "pointer",
            margin: 10,
            transition: "border 0.3s ease-in-out",
          }}
          onClick={() => {
            changeHability(update.name);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <img
              src={update.image}
              alt={update.name}
              style={{
                width: "5vw",
                height: "5vw",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
