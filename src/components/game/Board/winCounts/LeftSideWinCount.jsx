import player1 from "../../../../assets/imgs/player-one.svg";
import you from "../../../../assets/imgs/you.svg";

export default () => {
  const isVsCpu = false;
  const player1Wins = 12;

  return (
    <div className="relative rounded-[23px] border-3px bg-black shadow-mainMenuShadow">
      <div className="flex flex-col rounded-20px bg-white py-[10px] text-center">
        <span className="text-XS font-bold uppercase leading-XS">
          {!isVsCpu ? "Player 1" : "You"}
        </span>
        <span className="text-[2rem] font-bold leading-[41px]">
          {player1Wins}
        </span>
      </div>
      <div className="absolute left-[-27px] top-[50%] translate-y-[-50%]">
        <img
          src={!isVsCpu ? player1 : you}
          alt={
            !isVsCpu
              ? "A smiling red face pointed toward the right"
              : "A straight red face looking forward"
          }
        />
      </div>
    </div>
  );
};
