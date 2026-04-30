import { Series, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { Scene1Problem } from "./scenes-v2/Scene1-Problem";
import { Scene2Introduction } from "./scenes-v2/Scene2-Introduction";
import { Scene3Features } from "./scenes-v2/Scene3-Features";
import { Scene4LPJGenerator } from "./scenes-v2/Scene4-LPJGenerator";
import { Scene5MonitoringClosing } from "./scenes-v2/Scene5-MonitoringClosing";

export const OrganizeAIV2: React.FC = () => {
  return (
    <>
      {/* Voiceover Audio - Total duration: 116.54 seconds = 3496 frames at 30fps */}
      <Audio src={staticFile("voiceover.m4a")} />

      {/* Video Scenes - Synchronized with voiceover timeline */}
      <Series>
        {/* Scene 1: The Problem (00:00-00:26 = 26 seconds = 780 frames) */}
        <Series.Sequence durationInFrames={780}>
          <Scene1Problem />
        </Series.Sequence>

        {/* Scene 2: The Solution/Introduction (00:26-00:41 = 15 seconds = 450 frames) */}
        <Series.Sequence durationInFrames={450}>
          <Scene2Introduction />
        </Series.Sequence>

        {/* Scene 3: Core Features Demo (00:41-01:18 = 37 seconds = 1110 frames) */}
        <Series.Sequence durationInFrames={1110}>
          <Scene3Features />
        </Series.Sequence>

        {/* Scene 4: LPJ Generator Magic (01:19-01:40 = 21 seconds = 630 frames) */}
        <Series.Sequence durationInFrames={630}>
          <Scene4LPJGenerator />
        </Series.Sequence>

        {/* Scene 5: Monitoring & Closing (01:41-01:56 = 15 seconds = 450 frames) */}
        <Series.Sequence durationInFrames={450}>
          <Scene5MonitoringClosing />
        </Series.Sequence>
      </Series>
    </>
  );
};
