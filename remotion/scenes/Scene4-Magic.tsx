import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene4Magic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [0, 1 * fps], [50, 0], {
    extrapolateRight: "clamp",
  });

  // Button click effect
  const buttonScale = interpolate(
    frame,
    [3 * fps, 3.3 * fps, 3.6 * fps],
    [1, 0.95, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  // Loading animation
  const loadingOpacity = interpolate(
    frame,
    [4 * fps, 4.5 * fps, 6 * fps, 6.5 * fps],
    [0, 1, 1, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const loadingRotation = interpolate(frame, [4 * fps, 6.5 * fps], [0, 720], {
    extrapolateRight: "clamp",
  });

  // LPJ Preview pop in
  const previewScale = interpolate(frame, [6.5 * fps, 7.5 * fps], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  const previewOpacity = interpolate(frame, [6.5 * fps, 7.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Sparkle effect
  const sparkleScale = interpolate(
    frame,
    [7 * fps, 7.5 * fps, 8 * fps],
    [0, 1.5, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
        padding: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#92400e",
            marginBottom: 20,
          }}
        >
          The Real Game-Changer
        </h2>
        <p
          style={{
            fontSize: 32,
            color: "#78350f",
          }}
        >
          Forget spending weeks writing reports
        </p>
      </div>

      {/* Generate Button */}
      <div
        style={{
          transform: `scale(${buttonScale})`,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "20px 40px",
            borderRadius: 8,
            fontSize: 32,
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          Generate LPJ with AI
        </div>
      </div>

      {/* Loading indicator */}
      <div
        style={{
          opacity: loadingOpacity,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontSize: 48,
            transform: `rotate(${loadingRotation}deg)`,
          }}
        >
          ⚙️
        </div>
      </div>

      {/* LPJ Preview */}
      <div
        style={{
          opacity: previewOpacity,
          transform: `scale(${previewScale})`,
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 40,
          boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          maxWidth: 800,
          position: "relative",
        }}
      >
        {/* Sparkle effect */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            fontSize: 80,
            transform: `scale(${sparkleScale})`,
          }}
        >
          ✨
        </div>

        <h3
          style={{
            fontSize: 36,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            color: "#333",
          }}
        >
          ACCOUNTABILITY REPORT (LPJ)
        </h3>
        <p
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 30,
            color: "#666",
          }}
        >
          Division A - January 2024
        </p>

        <div
          style={{
            borderTop: "2px solid #ddd",
            paddingTop: 20,
          }}
        >
          <h4 style={{ fontSize: 24, fontWeight: "600", marginBottom: 10 }}>
            I. INTRODUCTION
          </h4>
          <p style={{ fontSize: 18, color: "#555", lineHeight: 1.6 }}>
            This accountability report covers all activities...
          </p>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#d1fae5",
            borderRadius: 6,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 20, color: "#065f46", fontWeight: "600" }}>
            ✓ Generated in 1 Click!
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
