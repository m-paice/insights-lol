export interface ChangesProps {
  data: {
    before: {
      resume: string;
      description: string;
    };
    resume: string;
    after: {
      resume: string;
      description: string;
    };
  };
}

export const Changes = ({ data }: ChangesProps) => {
  const isNerf = data.resume.toLowerCase() === "nerf";

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6vw",
      }}
    >
      <div
        style={{
          width: "24vw",
          height: "24vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          alignItems: "center",
          border: isNerf ? "2px solid gray" : "2px solid #E30A0A",
          borderRadius: 10,
          backgroundColor: isNerf
            ? "rgba(0, 0, 0, 0.4)"
            : "rgba(227, 10, 10, 0.2)",
          padding: 20,
        }}
      >
        <h4 style={{ color: isNerf ? "gray" : "#E30A0A", fontSize: "2vw" }}>
          ANTES
        </h4>
        <h4
          style={{
            color: isNerf ? "gray" : "#E30A0A",
            fontSize: "5.5vw",
            textAlign: "center",
          }}
        >
          {data.before.resume}
        </h4>
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "1.5vw",
          }}
        >
          {data.before.description}
        </p>
      </div>
      <div>
        <h4
          style={{
            fontSize: "4vw",
            color: isNerf ? "#E30A0A" : "#00B712",
            width: "12vw",
            textAlign: "center",
          }}
        >
          {data.resume.toUpperCase()}
        </h4>
      </div>
      <div
        style={{
          width: "24vw",
          height: "24vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          border: isNerf ? "2px solid #E30A0A" : "2px solid #00B712",
          borderRadius: 10,
          backgroundColor: isNerf
            ? "rgba(227, 10, 10, 0.1)"
            : "rgba(0, 183, 18, 0.2)",
          padding: 20,
        }}
      >
        <h4
          style={{
            color: isNerf ? "#E30A0A" : "#00B712",
            fontSize: "2vw",
          }}
        >
          AGORA
        </h4>
        <h4
          style={{
            color: isNerf ? "#E30A0A" : "#00B712",
            fontSize: "5.5vw",
            textAlign: "center",
          }}
        >
          {data.after.resume}
        </h4>
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "1.5vw",
          }}
        >
          {data.after.description}
        </p>
      </div>
    </div>
  );
};
