import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

interface HelloWorldProps {
  titleText: string;
  titleColor: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in animation (0-2 seconds)
  const opacity = interpolate(frame, [0, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Scale animation (0-1.5 seconds)
  const scale = interpolate(frame, [0, 1.5 * fps], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  // Rotation animation (continuous)
  const rotation = interpolate(frame, [0, 5 * fps], [0, 360], {
    extrapolateRight: "extend",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h1
          style={{
            fontSize: 100,
            color: titleColor,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {titleText}
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
