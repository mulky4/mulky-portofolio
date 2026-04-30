import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

export const Scene3Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // [00:40-00:42] Title fade in
  const titleOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:42-00:45] Expense modal appears
  const modalOpacity = interpolate(frame, [1 * fps, 2.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const modalScale = interpolate(frame, [1 * fps, 2.5 * fps], [0.9, 1], {
    extrapolateRight: "clamp",
  });

  // [00:45-00:48] Receipt upload
  const receiptOpacity = interpolate(frame, [3 * fps, 4 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [00:48-00:52] Processing animation
  const processingOpacity = interpolate(
    frame,
    [5 * fps, 6 * fps, 9 * fps, 10 * fps],
    [0, 1, 1, 0],
    {
      extrapolateRight: "clamp",
    }
  );

  const spinRotation = interpolate(frame, [5 * fps, 10 * fps], [0, 720], {
    extrapolateRight: "clamp",
  });

  // [00:52-00:57] AI extracted data appears
  const extractedOpacity = interpolate(frame, [10 * fps, 11.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const badgePop = interpolate(
    frame,
    [11 * fps, 11.5 * fps, 12 * fps],
    [0, 1.2, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  // [00:57-01:02] Smart OCR text overlay
  const ocrTextOpacity = interpolate(frame, [13 * fps, 14 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:02-01:05] Transition to approval queue
  const approvalTransition = interpolate(frame, [17 * fps, 18.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // [01:05-01:10] AI Budget Analysis highlight
  const budgetAnalysisOpacity = interpolate(frame, [20 * fps, 21 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const budgetPulse = interpolate(
    frame,
    [21 * fps, 21.5 * fps, 22 * fps],
    [1, 1.05, 1],
    {
      extrapolateRight: "extend",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f5f5f5",
        padding: 50,
      }}
    >
      {/* Section 1: Smart OCR Demo (00:40-01:02) */}
      {frame < 17 * fps && (
        <>
          {/* Title */}
          <div
            style={{
              opacity: titleOpacity,
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 52,
                fontWeight: "bold",
                color: "#333",
                marginBottom: 10,
              }}
            >
              For Members: Upload & Relax
            </h2>
          </div>

          {/* Upload Modal */}
          <div
            style={{
              opacity: modalOpacity,
              transform: `scale(${modalScale})`,
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 50,
              maxWidth: 800,
              margin: "0 auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <h3
              style={{
                fontSize: 32,
                fontWeight: "600",
                color: "#333",
                marginBottom: 30,
              }}
            >
              Submit New Expense
            </h3>

            {/* Upload area */}
            <div
              style={{
                border: "2px dashed #ddd",
                borderRadius: 8,
                padding: 50,
                textAlign: "center",
                marginBottom: 30,
                backgroundColor: receiptOpacity > 0 ? "#f0fdf4" : "#fafafa",
                borderColor: receiptOpacity > 0 ? "#059669" : "#ddd",
              }}
            >
              {processingOpacity > 0 ? (
                <div style={{ opacity: processingOpacity }}>
                  <div
                    style={{
                      fontSize: 60,
                      marginBottom: 20,
                      transform: `rotate(${spinRotation}deg)`,
                    }}
                  >
                    ⚙️
                  </div>
                  <div style={{ fontSize: 28, color: "#92400e", fontWeight: "600" }}>
                    Processing with AI...
                  </div>
                </div>
              ) : receiptOpacity > 0 ? (
                <div style={{ opacity: receiptOpacity }}>
                  <div style={{ fontSize: 60, marginBottom: 15 }}>✓</div>
                  <div style={{ fontSize: 24, color: "#059669", fontWeight: "600" }}>
                    receipt_banner.jpg
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ fontSize: 60, marginBottom: 15 }}>📄</div>
                  <div style={{ fontSize: 24, color: "#666" }}>
                    Click to upload receipt image
                  </div>
                </>
              )}
            </div>

            {/* Extracted data */}
            <div style={{ opacity: extractedOpacity }}>
              <div
                style={{
                  padding: 20,
                  backgroundColor: "#d1fae5",
                  borderRadius: 8,
                  marginBottom: 25,
                  border: "1px solid #86efac",
                }}
              >
                <div style={{ fontSize: 18, color: "#065f46", fontWeight: "600" }}>
                  ✓ AI Extraction Complete
                </div>
              </div>

              {/* Merchant */}
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginBottom: 8,
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Merchant Name
                  <span
                    style={{
                      padding: "4px 12px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: 4,
                      fontSize: 13,
                      color: "#666",
                      transform: `scale(${badgePop})`,
                    }}
                  >
                    🤖 AI Extracted
                  </span>
                </div>
                <div
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: 6,
                    fontSize: 20,
                    color: "#333",
                    backgroundColor: "#fff",
                  }}
                >
                  Toko Jaya Printing
                </div>
              </div>

              {/* Amount & Date */}
              <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      marginBottom: 8,
                      color: "#333",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    Amount
                    <span
                      style={{
                        padding: "4px 12px",
                        backgroundColor: "#f0f0f0",
                        borderRadius: 4,
                        fontSize: 13,
                        color: "#666",
                        transform: `scale(${badgePop})`,
                      }}
                    >
                      🤖 AI Extracted
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: 6,
                      fontSize: 20,
                      fontWeight: "600",
                      color: "#333",
                      backgroundColor: "#fff",
                    }}
                  >
                    Rp 450,000
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      marginBottom: 8,
                      color: "#333",
                    }}
                  >
                    Category
                  </div>
                  <div
                    style={{
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: 6,
                      fontSize: 20,
                      color: "#333",
                      backgroundColor: "#fff",
                    }}
                  >
                    Event Supplies
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart OCR text overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: ocrTextOpacity,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: "700",
                color: "#667eea",
                textShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              SMART OCR • No More Typos • No More Lost Data
            </div>
          </div>
        </>
      )}

      {/* Section 2: AI Budget Analysis (01:02-01:10) */}
      {frame >= 17 * fps && (
        <div style={{ opacity: approvalTransition }}>
          {/* Title */}
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <h2
              style={{
                fontSize: 52,
                fontWeight: "bold",
                color: "#333",
                marginBottom: 10,
              }}
            >
              For Leaders: Intelligent Approval
            </h2>
          </div>

          {/* Approval Queue Table */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                padding: "20px 30px",
                borderBottom: "1px solid #eee",
                fontSize: 24,
                fontWeight: "600",
                color: "#333",
              }}
            >
              Pending Approvals
            </div>

            {/* Table rows */}
            <div>
              {[
                {
                  id: "EXP-001",
                  name: "Ahmad",
                  desc: "Banner printing",
                  amount: "Rp 450,000",
                  status: "Within Budget",
                  statusColor: "#d1fae5",
                  textColor: "#065f46",
                },
                {
                  id: "EXP-004",
                  name: "Siti",
                  desc: "Speaker honorarium",
                  amount: "Rp 1,500,000",
                  status: "Near Limit (78%)",
                  statusColor: "#fef3c7",
                  textColor: "#92400e",
                },
                {
                  id: "EXP-005",
                  name: "Budi",
                  desc: "Catering",
                  amount: "Rp 2,000,000",
                  status: "Over Budget",
                  statusColor: "#fee2e2",
                  textColor: "#991b1b",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "25px 30px",
                    borderBottom: i < 2 ? "1px solid #eee" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 25,
                    opacity: i === 0 ? 1 : 0.6,
                    transform:
                      i === 0
                        ? `scale(${budgetPulse})`
                        : "scale(1)",
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: "500", width: 100 }}>
                    {item.id}
                  </div>
                  <div style={{ fontSize: 18, width: 100 }}>{item.name}</div>
                  <div style={{ fontSize: 18, flex: 1 }}>{item.desc}</div>
                  <div style={{ fontSize: 20, fontWeight: "600", width: 150 }}>
                    {item.amount}
                  </div>
                  <div
                    style={{
                      padding: "8px 16px",
                      backgroundColor: item.statusColor,
                      color: item.textColor,
                      borderRadius: 6,
                      fontSize: 16,
                      fontWeight: "600",
                      width: 200,
                      textAlign: "center",
                      opacity: i === 0 ? budgetAnalysisOpacity : 1,
                    }}
                  >
                    ✓ {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Budget Analysis text overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: budgetAnalysisOpacity,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: "700",
                color: "#059669",
                textShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              AI BUDGET ANALYSIS • Instant Flagging • Confident Decisions
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
