import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
  Img,
  staticFile,
} from "remotion";

export const Scene1Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Voiceover timeline: 00:00-00:26 (780 frames)

  // [00:00-00:05] Clock and "2:00 AM" text fade in
  const clockOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timeTextOpacity = interpolate(frame, [1 * fps, 2.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:05-00:08] Fade to stressed woman with cluttered office
  const stressedWomanTransition = interpolate(
    frame,
    [4 * fps, 5.5 * fps],
    [0, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  // [00:08-00:13] Show stressed woman with receipts
  const receiptsOpacity = interpolate(frame, [5.5 * fps, 7 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:13-00:18] Transition to Excel error scene
  const excelTransition = interpolate(frame, [11 * fps, 13 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:18-00:26] Problem statement
  const problemTextOpacity = interpolate(frame, [16 * fps, 18 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Red stress overlay pulsing
  const stressOpacity = interpolate(
    frame,
    [15 * fps, 16 * fps, 17 * fps, 18 * fps, 19 * fps, 20 * fps],
    [0, 0.15, 0, 0.2, 0, 0.15],
    {
      extrapolateRight: "extend",
    }
  );

  // Shake effect for stress
  const shakeX = interpolate(
    frame,
    [15 * fps, 15.2 * fps, 15.4 * fps, 15.6 * fps, 15.8 * fps],
    [0, -5, 5, -3, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Red stress overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#dc2626",
          opacity: stressOpacity,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Initial clock scene (00:00-00:05) */}
      {frame < 5 * fps && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1 - stressedWomanTransition,
          }}
        >
          <div
            style={{
              opacity: clockOpacity,
              fontSize: 140,
              marginBottom: 30,
            }}
          >
            ⏰
          </div>

          <div
            style={{
              opacity: timeTextOpacity,
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: 96,
                color: "#fff",
                fontWeight: "bold",
                marginBottom: 15,
              }}
            >
              2:00 AM
            </h1>
            <p
              style={{
                fontSize: 42,
                color: "#e5e5e5",
                marginBottom: 0,
              }}
            >
              1 Day Before Deadline
            </p>
          </div>
        </div>
      )}

      {/* Stressed woman with cluttered office (00:05-00:13) */}
      {frame >= 4 * fps && frame < 13 * fps && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: receiptsOpacity * (1 - excelTransition),
          }}
        >
          <Img
            src={staticFile(
              "stressed-woman-cluttered-home-office-600nw-2549122909.jpg.webp"
            )}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Dark overlay for text readability */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          />

          {/* Text overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "80%",
            }}
          >
            <p
              style={{
                fontSize: 48,
                color: "#fff",
                fontWeight: "700",
                textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                lineHeight: 1.4,
              }}
            >
              Drowning in crumpled receipts, manual data entry,
              <br />
              and spreadsheets that just won't balance
            </p>
          </div>
        </div>
      )}

      {/* Excel error scene with woman putting head in hands (00:13-00:26) */}
      {frame >= 11 * fps && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: excelTransition,
            transform: `translateX(${shakeX}px)`,
          }}
        >
          <Img
            src={staticFile(
              "tensed-businesswoman-puts-head-hands-front-laptop-office-workplace-woman-suffers-headache-rubs-temples-tensed-326793307.jpg.webp"
            )}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          />

          {/* Excel error popup overlay */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: 40,
              borderRadius: 8,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              maxWidth: 600,
              opacity: frame >= 13 * fps ? 1 : 0,
            }}
          >
            <div
              style={{
                fontSize: 48,
                color: "#dc2626",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              ❌ Error
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#333",
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              Formula error: #VALUE!
              <br />
              <span style={{ fontSize: 18, color: "#666" }}>
                The value does not match the expected data type...
              </span>
            </div>
          </div>

          {/* Problem statement */}
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 80,
              right: 80,
              textAlign: "center",
              opacity: problemTextOpacity,
            }}
          >
            <p
              style={{
                fontSize: 42,
                color: "#fca5a5",
                fontWeight: "700",
                lineHeight: 1.5,
                textShadow: "0 4px 16px rgba(0,0,0,0.8)",
              }}
            >
              Inefficiency, human error, and budget anomalies
              <br />
              are killing our productivity
            </p>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
