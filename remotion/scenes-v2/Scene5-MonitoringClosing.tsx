import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
  Img,
  staticFile,
} from "remotion";

export const Scene5MonitoringClosing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // [01:30-01:32] Title fade in
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:32-01:35] Budget monitoring appears
  const monitorOpacity = interpolate(frame, [1 * fps, 2.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:35-01:40] Progress bars animate
  const bar1 = Math.min(
    interpolate(frame, [2.5 * fps, 4 * fps], [0, 65], {
      extrapolateRight: "clamp",
    }),
    65
  );

  const bar2 = Math.min(
    interpolate(frame, [3 * fps, 4.5 * fps], [0, 82], {
      extrapolateRight: "clamp",
    }),
    82
  );

  const bar3 = Math.min(
    interpolate(frame, [3.5 * fps, 5 * fps], [0, 45], {
      extrapolateRight: "clamp",
    }),
    45
  );

  const bar4 = Math.min(
    interpolate(frame, [4 * fps, 5.5 * fps], [0, 92], {
      extrapolateRight: "clamp",
    }),
    92
  );

  // [01:40-01:43] AI Insights pulse
  const insightsPulse = interpolate(
    frame,
    [6 * fps, 6.5 * fps, 7 * fps],
    [1, 1.05, 1],
    {
      extrapolateRight: "extend",
    }
  );

  const insightsOpacity = interpolate(frame, [5.5 * fps, 6.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:43-01:45] Transition to closing
  const closingTransition = interpolate(frame, [9 * fps, 10.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:45-01:50] Logo scale in
  const logoScale = interpolate(frame, [10 * fps, 12 * fps], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [10 * fps, 11.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:50-01:55] Tagline fade in
  const taglineOpacity = interpolate(frame, [12 * fps, 13.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:55-02:00] Final elements
  const footerOpacity = interpolate(frame, [14 * fps, 15 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      {/* Budget Monitoring Section (01:30-01:43) */}
      {frame < 9 * fps && (
        <div
          style={{
            opacity: 1 - closingTransition,
            padding: 60,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Title */}
          <div
            style={{
              opacity: titleOpacity,
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            <h2
              style={{
                fontSize: 56,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Real-time Budget Monitoring
            </h2>
            <p
              style={{
                fontSize: 28,
                color: "#666",
                marginTop: 15,
              }}
            >
              Stop financial leaks before they happen
            </p>
          </div>

          {/* Budget monitoring card */}
          <div
            style={{
              opacity: monitorOpacity,
              backgroundColor: "#fff",
              border: "2px solid #ddd",
              borderRadius: 12,
              padding: 50,
              maxWidth: 1200,
              margin: "0 auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            {/* Division A */}
            <div style={{ marginBottom: 35 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Division A
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {bar1.toFixed(0)}%
                </span>
              </div>
              <div
                style={{
                  height: 16,
                  backgroundColor: "#eee",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bar1}%`,
                    backgroundColor: "#333",
                    borderRadius: 8,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            {/* Division B - Warning */}
            <div style={{ marginBottom: 35 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Division B
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "600",
                    color: "#d97706",
                    transform: `scale(${bar2 > 80 ? insightsPulse : 1})`,
                  }}
                >
                  {bar2.toFixed(0)}%
                </span>
              </div>
              <div
                style={{
                  height: 16,
                  backgroundColor: "#eee",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bar2}%`,
                    backgroundColor: "#d97706",
                    borderRadius: 8,
                  }}
                />
              </div>
            </div>

            {/* Division C */}
            <div style={{ marginBottom: 35 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Division C
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {bar3.toFixed(0)}%
                </span>
              </div>
              <div
                style={{
                  height: 16,
                  backgroundColor: "#eee",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bar3}%`,
                    backgroundColor: "#333",
                    borderRadius: 8,
                  }}
                />
              </div>
            </div>

            {/* Division D - Danger */}
            <div style={{ marginBottom: 35 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Division D
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "600",
                    color: "#dc2626",
                    transform: `scale(${bar4 > 90 ? insightsPulse : 1})`,
                  }}
                >
                  {bar4.toFixed(0)}%
                </span>
              </div>
              <div
                style={{
                  height: 16,
                  backgroundColor: "#eee",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bar4}%`,
                    backgroundColor: "#dc2626",
                    borderRadius: 8,
                  }}
                />
              </div>
            </div>

            {/* AI Insights */}
            <div
              style={{
                opacity: insightsOpacity,
                marginTop: 40,
                padding: "22px 28px",
                backgroundColor: "#fffbeb",
                border: "2px solid #fcd34d",
                borderRadius: 8,
                transform: `scale(${insightsPulse})`,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: "#92400e",
                  fontWeight: "600",
                }}
              >
                ⚠️ AI Insight: Division D at 92% - Review expenses carefully
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closing Screen (01:43-02:00) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #0088CC 0%, #00CC88 50%, #00B8A9 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: closingTransition,
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            textAlign: "center",
          }}
        >
          <Img
            src={staticFile("Gemini_Generated_Image_url23durl23durl2-2.png")}
            style={{
              width: 600,
              height: "auto",
              marginBottom: 50,
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))",
            }}
          />

          {/* Tagline */}
          <div style={{ opacity: taglineOpacity }}>
            <p
              style={{
                fontSize: 42,
                color: "#ffffff",
                marginBottom: 30,
                fontWeight: "600",
              }}
            >
              Building the architecture of tomorrow's organizations
            </p>
            <div
              style={{
                fontSize: 36,
                color: "#ffffff",
                fontWeight: "500",
                letterSpacing: 2,
              }}
            >
              Smart • Transparent • Integrity-driven
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            opacity: footerOpacity,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 38,
              color: "#ffffff",
              marginBottom: 15,
              fontWeight: "700",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            🏆 Hackvidia 10.0
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#ffffff",
              fontWeight: "500",
              letterSpacing: 2,
            }}
          >
            Innovate for Impact
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
