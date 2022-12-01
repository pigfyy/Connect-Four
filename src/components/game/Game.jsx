import Header from "./Header";
import Board from "./Board/Board";

export default () => {
  return (
    <div className="flex min-h-screen flex-col gap-[43px] bg-purple-400 py-[46px]">
      <Header />
      <Board />
    </div>
  );
};
