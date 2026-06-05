import React from "react";
import { Composition } from "remotion";
import { CinematicStage, DATA } from "@/app/demo/classroom-pro/page";

// Centralized Remotion Root
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ClassroomPRO"
        component={CinematicStage}
        durationInFrames={DATA.length * 90} // 3 seconds per scene at 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          index: 0,
          mode: 'immersive',
          isWatermarkVisible: true,
          isCaptureMode: true,
        }}
      />
      {/* Future products (like CRM or Admin) can be added as new Compositions here */}
    </>
  );
};
