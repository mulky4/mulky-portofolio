import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene2Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background transition from dark to light
  const bgOpacity = interpolate(frame, [0, 1 * fps], [1, 0], {
    extrapolateRight: "clamp",
  });

  // Logo scale and fade in
  const logoScale = interpolate(frame, [1 * fps, 2.5 * fps], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [1 * fps, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Tagline fade in
  const taglineOpacity = interpolate(frame, [2.5 * fps, 3.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Description fade in
  const descOpacity = interpolate(frame, [4 * fps, 5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Floating animation for logo
  const floatY = interpolate(
    frame,
    [3 * fps, 5 * fps, 7 * fps, 9 * fps],
    [0, -10, 0, -10],
    {
      extrapolateRight: "extend",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay (fades out) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#1a1a1a",
          opacity: bgOpacity,
        }}
      />

      {/* Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale}) translateY(${floatY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          OrganizeAI
        </div>
        <div
          style={{
            opacity: taglineOpacity,
            fontSize: 32,
            color: "#f0f0f0",
            fontWeight: "300",
            letterSpacing: 4,
          }}
        >
          INNOVATE FOR IMPACT
        </div>
      </div>

      {/* Description */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: descOpacity,
          padding: "0 100px",
        }}
      >
        <p
          style={{
            fontSize: 36,
            color: "#fff",
            fontWeight: "500",
            lineHeight: 1.5,
          }}
        >
          The AI-powered platform for effortless organization management
        </p>
      </div>
    </AbsoluteFill>
  );
};
