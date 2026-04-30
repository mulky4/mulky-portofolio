import { Series } from "remotion";
import { Scene1Hook } from "./scenes/Scene1-Hook";
import { Scene2Solution } from "./scenes/Scene2-Solution";
import { Scene3Demo } from "./scenes/Scene3-Demo";
import { Scene4Magic } from "./scenes/Scene4-Magic";
import { Scene5Closing } from "./scenes/Scene5-Closing";

export const OrganizeAI: React.FC = () => {
  return (
    <Series>
      {/* Scene 1: The Hook (0-20 seconds = 600 frames at 30fps) */}
      <Series.Sequence durationInFrames={600}>
        <Scene1Hook />
      </Series.Sequence>

      {/* Scene 2: The Solution (20-40 seconds = 600 frames) */}
      <Series.Sequence durationInFrames={600}>
        <Scene2Solution />
      </Series.Sequence>

      {/* Scene 3: The Demo (40-70 seconds = 900 frames) */}
      <Series.Sequence durationInFrames={900}>
        <Scene3Demo />
      </Series.Sequence>

      {/* Scene 4: The Magic (70-90 seconds = 600 frames) */}
      <Series.Sequence durationInFrames={600}>
        <Scene4Magic />
      </Series.Sequence>

      {/* Scene 5: Monitoring & Closing (90-105 seconds = 450 frames) */}
      <Series.Sequence durationInFrames={450}>
        <Scene5Closing />
      </Series.Sequence>
    </Series>
  );
};
