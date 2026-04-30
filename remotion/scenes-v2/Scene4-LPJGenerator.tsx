import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene4LPJGenerator: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // [01:10-01:12] Title fade in
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [0, 1 * fps], [30, 0], {
    extrapolateRight: "clamp",
  });

  // [01:12-01:14] LPJ Generator page appears
  const pageOpacity = interpolate(frame, [1 * fps, 2.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:14-01:16] Button hover/click effect
  const buttonScale = interpolate(
    frame,
    [3 * fps, 3.2 * fps, 3.4 * fps],
    [1, 0.95, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  const buttonGlow = interpolate(
    frame,
    [3 * fps, 3.5 * fps],
    [0, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  // [01:16-01:20] Loading animation
  const loadingOpacity = interpolate(
    frame,
    [3.5 * fps, 4 * fps, 7 * fps, 7.5 * fps],
    [0, 1, 1, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const spinRotation = interpolate(frame, [3.5 * fps, 7.5 * fps], [0, 1080], {
    extrapolateRight: "clamp",
  });

  // [01:20-01:23] LPJ Preview pops in
  const previewScale = interpolate(frame, [7.5 * fps, 9 * fps], [0.7, 1], {
    extrapolateRight: "clamp",
  });

  const previewOpacity = interpolate(frame, [7.5 * fps, 9 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:23-01:25] Sparkle effects
  const sparkle1Scale = interpolate(
    frame,
    [8 * fps, 8.5 * fps, 9 * fps],
    [0, 1.5, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const sparkle2Scale = interpolate(
    frame,
    [8.3 * fps, 8.8 * fps, 9.3 * fps],
    [0, 1.5, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  // [01:25-01:30] Text overlay
  const textOverlayOpacity = interpolate(frame, [11 * fps, 12 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
        padding: 50,
        display: "flex",
        flexDirection: "column",
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
          marginBottom: 50,
        }}
      >
        <h2
          style={{
            fontSize: 68,
            fontWeight: "bold",
            color: "#92400e",
            marginBottom: 20,
          }}
        >
          The Real Game-Changer
        </h2>
        <p
          style={{
            fontSize: 36,
            color: "#78350f",
            fontWeight: "500",
          }}
        >
          Forget spending weeks writing reports
        </p>
      </div>

      {/* LPJ Generator Interface (before click) */}
      {frame < 7.5 * fps && (
        <div
          style={{
            opacity: pageOpacity,
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 40,
            maxWidth: 700,
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <h3
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: "#333",
              marginBottom: 30,
            }}
          >
            Generate Accountability Report (LPJ)
          </h3>

          {/* Form fields */}
          <div style={{ marginBottom: 25 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginBottom: 8,
                color: "#333",
              }}
            >
              Report Period
            </div>
            <div
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: 6,
                fontSize: 18,
                color: "#333",
                backgroundColor: "#fff",
              }}
            >
              January 2024
            </div>
          </div>

          {/* Generate button */}
          <div
            style={{
              transform: `scale(${buttonScale})`,
              marginTop: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "18px 40px",
                borderRadius: 8,
                fontSize: 28,
                fontWeight: "600",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 ${
                  buttonGlow * 40
                }px rgba(102, 126, 234, ${buttonGlow * 0.6})`,
              }}
            >
              Generate LPJ with AI 🚀
            </div>
          </div>
        </div>
      )}

      {/* Loading animation */}
      {loadingOpacity > 0 && (
        <div
          style={{
            opacity: loadingOpacity,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 80,
              marginBottom: 20,
              transform: `rotate(${spinRotation}deg)`,
            }}
          >
            ⚙️
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#92400e",
              fontWeight: "600",
            }}
          >
            Generating with AI...
          </div>
        </div>
      )}

      {/* LPJ Preview */}
      {frame >= 7.5 * fps && (
        <div
          style={{
            opacity: previewOpacity,
            transform: `scale(${previewScale})`,
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 50,
            maxWidth: 900,
            boxShadow: "0 12px 48px rgba(0,0,0,0.25)",
            position: "relative",
          }}
        >
          {/* Sparkle effects */}
          <div
            style={{
              position: "absolute",
              top: -30,
              right: -30,
              fontSize: 100,
              transform: `scale(${sparkle1Scale})`,
            }}
          >
            ✨
          </div>
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              fontSize: 80,
              transform: `scale(${sparkle2Scale})`,
            }}
          >
            ✨
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -25,
              right: 100,
              fontSize: 90,
              transform: `scale(${sparkle1Scale})`,
            }}
          >
            ✨
          </div>

          {/* LPJ Header */}
          <h2
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 15,
              color: "#333",
              textTransform: "uppercase",
            }}
          >
            Accountability Report (LPJ)
          </h2>
          <h3
            style={{
              fontSize: 26,
              textAlign: "center",
              marginBottom: 35,
              color: "#666",
              fontWeight: "normal",
            }}
          >
            Division A - Himpunan A
            <br />
            Period: January 2024
          </h3>

          {/* LPJ Content preview */}
          <div
            style={{
              borderTop: "2px solid #ddd",
              paddingTop: 25,
            }}
          >
            <h4
              style={{
                fontSize: 22,
                fontWeight: "600",
                marginBottom: 12,
                color: "#333",
              }}
            >
              I. INTRODUCTION
            </h4>
            <p
              style={{
                fontSize: 17,
                color: "#555",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              This accountability report covers all activities and financial
              transactions conducted by Division A during the period of January
              2024...
            </p>

            <h4
              style={{
                fontSize: 22,
                fontWeight: "600",
                marginBottom: 12,
                color: "#333",
              }}
            >
              II. FINANCIAL REPORT
            </h4>

            {/* Simple table mockup */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: 6,
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f5f5f5",
                  padding: "12px 16px",
                  fontWeight: "600",
                  fontSize: 15,
                  borderBottom: "1px solid #ddd",
                }}
              >
                <div style={{ flex: 2 }}>Category</div>
                <div style={{ flex: 1, textAlign: "right" }}>Budget</div>
                <div style={{ flex: 1, textAlign: "right" }}>Actual</div>
              </div>
              {[
                ["Event Supplies", "Rp 3,000,000", "Rp 2,850,000"],
                ["Transportation", "Rp 1,500,000", "Rp 1,450,000"],
                ["Consumables", "Rp 2,000,000", "Rp 2,200,000"],
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    padding: "12px 16px",
                    fontSize: 15,
                    borderBottom: i < 2 ? "1px solid #eee" : "none",
                  }}
                >
                  <div style={{ flex: 2 }}>{row[0]}</div>
                  <div style={{ flex: 1, textAlign: "right" }}>{row[1]}</div>
                  <div style={{ flex: 1, textAlign: "right" }}>{row[2]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Success badge */}
          <div
            style={{
              marginTop: 30,
              padding: "18px 25px",
              backgroundColor: "#d1fae5",
              borderRadius: 8,
              textAlign: "center",
              border: "2px solid #86efac",
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: "#065f46",
                fontWeight: "700",
              }}
            >
              ✓ Generated in 1 Click!
            </div>
            <div style={{ fontSize: 18, color: "#065f46", marginTop: 5 }}>
              Formal • Accurate • Ready for Submission
            </div>
          </div>
        </div>
      )}

      {/* Text overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: textOverlayOpacity,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: "700",
            color: "#92400e",
            textShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          AUTO-LPJ GENERATOR • Instant Reports • Zero Manual Work
        </div>
      </div>
    </AbsoluteFill>
  );
};
