import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
  Img,
  staticFile,
} from "remotion";

export const Scene2Introduction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // [00:20-00:22] Fast transition from dark
  const bgTransition = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:22-00:25] Logo scale in
  const logoScale = interpolate(frame, [0.5 * fps, 2 * fps], [0.3, 1], {
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:25-00:27] Tagline fade in
  const taglineOpacity = interpolate(frame, [2 * fps, 3 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:28-00:35] Dashboard UI fade in
  const dashboardOpacity = interpolate(frame, [5 * fps, 6.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:35-00:40] Text overlay
  const textOverlayOpacity = interpolate(frame, [10 * fps, 11 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Floating animation
  const floatY = interpolate(
    frame,
    [3 * fps, 5 * fps, 7 * fps, 9 * fps],
    [0, -8, 0, -8],
    {
      extrapolateRight: "extend",
    }
  );

  // Stats counter animation
  const statsValue = Math.min(frame, 10 * fps);
  const budget = Math.floor(
    interpolate(statsValue, [5 * fps, 8 * fps], [0, 10000000], {
      extrapolateRight: "clamp",
    })
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0088CC 0%, #00CC88 50%, #00B8A9 100%)",
        position: "relative",
      }}
    >
      {/* Dark overlay that fades */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#1a1a1a",
          opacity: 1 - bgTransition,
          pointerEvents: "none",
        }}
      />

      {/* Logo section (first half of scene) */}
      {frame < 8 * fps && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${logoScale}) translateY(${floatY}px)`,
            opacity: logoOpacity,
            textAlign: "center",
          }}
        >
          <Img
            src={staticFile("Gemini_Generated_Image_url23durl23durl2-2.png")}
            style={{
              width: 600,
              height: "auto",
              marginBottom: 40,
              filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.3))",
            }}
          />
          <div
            style={{
              opacity: taglineOpacity,
              fontSize: 42,
              color: "#ffffff",
              fontWeight: "600",
              letterSpacing: 4,
              textTransform: "uppercase",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Innovate for Impact
          </div>
        </div>
      )}

      {/* Dashboard UI mockup (second half) */}
      <div
        style={{
          opacity: dashboardOpacity,
          padding: 40,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: "20px 30px",
            marginBottom: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: "600", color: "#333" }}>
            OrganizeAI Dashboard
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 16, fontWeight: "500", color: "#333" }}>
                Ahmad Fauzan
              </div>
              <div style={{ fontSize: 13, color: "#666" }}>
                Member - Division A
              </div>
            </div>
            <div
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#e0e0e0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "#666",
              }}
            >
              AF
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginBottom: 30,
          }}
        >
          {[
            {
              label: "Division Budget",
              value: `Rp ${budget.toLocaleString("id-ID")}`,
              progress: 65,
            },
            { label: "Pending Approvals", value: "3", progress: 0 },
            { label: "This Month Transactions", value: "12", progress: 0 },
            { label: "LPJ Status", value: "Draft", progress: 0 },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: 8,
                padding: 25,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  marginBottom: 10,
                  fontWeight: "600",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: stat.progress > 0 ? 12 : 0,
                }}
              >
                {stat.value}
              </div>
              {stat.progress > 0 && (
                <>
                  <div
                    style={{
                      height: 8,
                      backgroundColor: "#eee",
                      borderRadius: 4,
                      overflow: "hidden",
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${stat.progress}%`,
                        backgroundColor: "#333",
                        borderRadius: 4,
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 13, color: "#666" }}>
                    {stat.progress}% used
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Text overlay with keywords */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            textAlign: "center",
            opacity: textOverlayOpacity,
          }}
        >
          <div
            style={{
              fontSize: 42,
              color: "#fff",
              fontWeight: "700",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              marginBottom: 15,
            }}
          >
            Total Transparency • Effortless Efficiency
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
