import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene3Demo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title fade in
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Smart OCR section
  const ocrOpacity = interpolate(frame, [2 * fps, 3 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const ocrScale = interpolate(frame, [2 * fps, 3 * fps], [0.9, 1], {
    extrapolateRight: "clamp",
  });

  // Processing animation
  const processingOpacity = interpolate(
    frame,
    [5 * fps, 6 * fps, 8 * fps, 9 * fps],
    [0, 1, 1, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  // Extracted data reveal
  const extractedOpacity = interpolate(frame, [9 * fps, 10 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // AI Budget section
  const budgetOpacity = interpolate(frame, [15 * fps, 16 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Badge animations
  const badgeScale = interpolate(
    frame,
    [10 * fps, 10.5 * fps, 11 * fps],
    [0, 1.2, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f5f5f5",
        padding: 60,
      }}
    >
      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Core Features
        </h2>
      </div>

      {/* Smart OCR Demo */}
      <div
        style={{
          opacity: ocrOpacity,
          transform: `scale(${ocrScale})`,
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 40,
          marginBottom: 40,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            fontSize: 40,
            fontWeight: "600",
            color: "#667eea",
            marginBottom: 20,
          }}
        >
          Smart OCR Engine
        </h3>
        <p
          style={{
            fontSize: 28,
            color: "#666",
            marginBottom: 30,
          }}
        >
          Upload a receipt photo...
        </p>

        {/* Processing indicator */}
        <div
          style={{
            opacity: processingOpacity,
            padding: 20,
            backgroundColor: "#fffbeb",
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <div style={{ fontSize: 24, color: "#92400e" }}>
            ⏳ Processing with AI...
          </div>
        </div>

        {/* Extracted data */}
        <div style={{ opacity: extractedOpacity }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <span style={{ fontSize: 24, color: "#333", marginRight: 10 }}>
              Merchant:
            </span>
            <span style={{ fontSize: 24, fontWeight: "600", color: "#333" }}>
              Toko Jaya Printing
            </span>
            <span
              style={{
                marginLeft: 15,
                padding: "4px 12px",
                backgroundColor: "#f0f0f0",
                borderRadius: 4,
                fontSize: 16,
                color: "#666",
                transform: `scale(${badgeScale})`,
              }}
            >
              AI Extracted
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <span style={{ fontSize: 24, color: "#333", marginRight: 10 }}>
              Amount:
            </span>
            <span style={{ fontSize: 24, fontWeight: "600", color: "#333" }}>
              Rp 450,000
            </span>
            <span
              style={{
                marginLeft: 15,
                padding: "4px 12px",
                backgroundColor: "#f0f0f0",
                borderRadius: 4,
                fontSize: 16,
                color: "#666",
                transform: `scale(${badgeScale})`,
              }}
            >
              AI Extracted
            </span>
          </div>
        </div>
      </div>

      {/* AI Budget Analysis */}
      <div
        style={{
          opacity: budgetOpacity,
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 40,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            fontSize: 40,
            fontWeight: "600",
            color: "#059669",
            marginBottom: 20,
          }}
        >
          AI Budget Analysis
        </h3>
        <div
          style={{
            padding: 20,
            backgroundColor: "#d1fae5",
            borderRadius: 8,
            border: "1px solid #86efac",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#065f46",
              fontWeight: "600",
            }}
          >
            ✓ Within Budget
          </div>
          <div style={{ fontSize: 20, color: "#065f46", marginTop: 8 }}>
            Automatically flags over-budget items
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
