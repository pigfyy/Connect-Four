import Header from "./Header";
import Board from "./Board/Board";

export default () => {
  return (
    <div className="min-h-screen min-w-[375px] gap-[43px] bg-purple-400">
      <div className="flex flex-col gap-[43px] py-[46px]">
        <Header />
        <Board />
      </div>
    </div>
  );
};
