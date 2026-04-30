import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { OrganizeAI } from "./OrganizeAI";
import { OrganizeAIV2 } from "./OrganizeAI-V2";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="OrganizeAI-Promo"
        component={OrganizeAIV2}
        durationInFrames={3420}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="OrganizeAI"
        component={OrganizeAI}
        durationInFrames={3150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
        }}
      />
    </>
  );
};
