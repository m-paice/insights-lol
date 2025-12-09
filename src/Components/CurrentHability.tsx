export interface CurrentHabilityProps {
  data: {
    image: string;
    name: string;
    description: string;
  };
}

export const CurrentHability = ({
  data: { image, name, description },
}: CurrentHabilityProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        height: 180,
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "5vw",
          height: "5vw",
        }}
      />
      <div
        style={{
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: "3vw",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: "1.5vw",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
