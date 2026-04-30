import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Clock ticking animation
  const clockOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Text fade in
  const textOpacity = interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Stress visual (red overlay pulsing)
  const stressOpacity = interpolate(
    frame,
    [2 * fps, 3 * fps, 4 * fps, 5 * fps],
    [0, 0.3, 0, 0.3],
    {
      extrapolateRight: "clamp",
    }
  );

  // Second text fade
  const text2Opacity = interpolate(frame, [10 * fps, 11 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a1a",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Stress overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#dc2626",
          opacity: stressOpacity,
        }}
      />

      {/* Clock icon */}
      <div
        style={{
          opacity: clockOpacity,
          fontSize: 120,
          marginBottom: 40,
        }}
      >
        ⏰
      </div>

      {/* Main text */}
      <div
        style={{
          opacity: textOpacity,
          textAlign: "center",
          padding: "0 80px",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          2:00 AM
        </h1>
        <p
          style={{
            fontSize: 36,
            color: "#e5e5e5",
            marginBottom: 40,
          }}
        >
          1 Day Before Deadline
        </p>
      </div>

      {/* Problem statement */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: text2Opacity,
          padding: "0 100px",
        }}
      >
        <p
          style={{
            fontSize: 32,
            color: "#fca5a5",
            fontWeight: "500",
            lineHeight: 1.5,
          }}
        >
          Drowning in receipts, manual data entry, and spreadsheet errors
        </p>
      </div>
    </AbsoluteFill>
  );
};
