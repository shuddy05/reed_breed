import { Composition } from "remotion";
import { CinematicStage } from "../CinematicStage";
import { CLASSROOM_PRO_DATA } from "@/app/demo/classroom-pro/page"; // We'll need to export this or move it

export const ProductDemoComposition = () => {
  return (
    <>
      <Composition
        id="ClassroomPRO"
        component={CinematicStage}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          index: 0,
          mode: 'immersive',
          isWatermarkVisible: true,
          data: [] // We'll pass data here
        }}
      />
    </>
  );
};
