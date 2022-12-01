import LeftSideWinCount from "./winCounts/LeftSideWinCount";
import RightSideWinCount from "./winCounts/RightSideWinCount";

export default () => {
  return (
    <div className="grid grid-cols-2 gap-[21px] px-[27px]">
      <LeftSideWinCount />
      <RightSideWinCount />
    </div>
  );
};
