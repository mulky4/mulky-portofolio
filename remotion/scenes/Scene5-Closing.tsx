import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene5Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Budget monitoring fade in
  const monitorOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Progress bars animation
  const bar1Width = interpolate(frame, [2 * fps, 3 * fps], [0, 65], {
    extrapolateRight: "clamp",
  });

  const bar2Width = interpolate(frame, [2.5 * fps, 3.5 * fps], [0, 82], {
    extrapolateRight: "clamp",
  });

  const bar3Width = interpolate(frame, [3 * fps, 4 * fps], [0, 45], {
    extrapolateRight: "clamp",
  });

  const bar4Width = interpolate(frame, [3.5 * fps, 4.5 * fps], [0, 92], {
    extrapolateRight: "clamp",
  });

  // Warning badge pulse
  const warningPulse = interpolate(
    frame,
    [5 * fps, 5.5 * fps, 6 * fps],
    [1, 1.1, 1],
    {
      extrapolateRight: "extend",
    }
  );

  // Transition to final
  const finalTransition = interpolate(frame, [8 * fps, 9 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Logo animation
  const logoScale = interpolate(frame, [9 * fps, 10.5 * fps], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [9 * fps, 10 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Tagline fade in
  const taglineOpacity = interpolate(frame, [10.5 * fps, 11.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      {/* Budget Monitoring Section */}
      <div
        style={{
          opacity: monitorOpacity * (1 - finalTransition),
          padding: 60,
        }}
      >
        <h2
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "#333",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Real-time Budget Monitoring
        </h2>

        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 40,
          }}
        >
          {/* Division A */}
          <div style={{ marginBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 24, fontWeight: "500" }}>
                Division A
              </span>
              <span style={{ fontSize: 24 }}>{bar1Width.toFixed(0)}%</span>
            </div>
            <div
              style={{
                height: 12,
                backgroundColor: "#eee",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${bar1Width}%`,
                  backgroundColor: "#333",
                  borderRadius: 6,
                }}
              />
            </div>
          </div>

          {/* Division B - Warning */}
          <div style={{ marginBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 24, fontWeight: "500" }}>
                Division B
              </span>
              <span
                style={{
                  fontSize: 24,
                  color: "#d97706",
                  transform: `scale(${warningPulse})`,
                }}
              >
                {bar2Width.toFixed(0)}%
              </span>
            </div>
            <div
              style={{
                height: 12,
                backgroundColor: "#eee",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${bar2Width}%`,
                  backgroundColor: "#d97706",
                  borderRadius: 6,
                }}
              />
            </div>
          </div>

          {/* Division C */}
          <div style={{ marginBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 24, fontWeight: "500" }}>
                Division C
              </span>
              <span style={{ fontSize: 24 }}>{bar3Width.toFixed(0)}%</span>
            </div>
            <div
              style={{
                height: 12,
                backgroundColor: "#eee",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${bar3Width}%`,
                  backgroundColor: "#333",
                  borderRadius: 6,
                }}
              />
            </div>
          </div>

          {/* Division D - Danger */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 24, fontWeight: "500" }}>
                Division D
              </span>
              <span style={{ fontSize: 24, color: "#dc2626" }}>
                {bar4Width.toFixed(0)}%
              </span>
            </div>
            <div
              style={{
                height: 12,
                backgroundColor: "#eee",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${bar4Width}%`,
                  backgroundColor: "#dc2626",
                  borderRadius: 6,
                }}
              />
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div
          style={{
            marginTop: 30,
            padding: 20,
            backgroundColor: "#fffbeb",
            border: "1px solid #fcd34d",
            borderRadius: 8,
            transform: `scale(${warningPulse})`,
          }}
        >
          <div style={{ fontSize: 20, color: "#92400e", fontWeight: "600" }}>
            ⚠️ AI Insight: Division D at 92% - Review expenses carefully
          </div>
        </div>
      </div>

      {/* Final Logo Screen */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: finalTransition,
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 120,
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 30,
            }}
          >
            OrganizeAI
          </h1>
          <p
            style={{
              fontSize: 36,
              color: "#f0f0f0",
              opacity: taglineOpacity,
              marginBottom: 20,
            }}
          >
            Building the architecture of tomorrow's organizations
          </p>
          <div
            style={{
              fontSize: 28,
              color: "#e0e0e0",
              opacity: taglineOpacity,
              fontWeight: "300",
            }}
          >
            Smart • Transparent • Integrity-driven
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            opacity: taglineOpacity,
            fontSize: 20,
            color: "#f0f0f0",
          }}
        >
          Hackvidia 10.0
        </div>
      </div>
    </AbsoluteFill>
  );
};
