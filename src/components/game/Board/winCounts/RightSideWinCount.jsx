import player2 from "../../../../assets/imgs/player-two.svg";
import cpu from "../../../../assets/imgs/cpu.svg";

export default () => {
  const isVsCpu = false;
  const player2Wins = 23;

  return (
    <div className="relative rounded-[23px] border-3px bg-black shadow-mainMenuShadow">
      <div className="flex flex-col rounded-20px bg-white py-[10px] text-center">
        <span className="text-XS font-bold uppercase leading-XS">
          {!isVsCpu ? "Player 2" : "CPU"}
        </span>
        <span className="text-[2rem] font-bold leading-[41px]">
          {player2Wins}
        </span>
      </div>
      <div className="absolute right-[-27px] top-[50%] translate-y-[-50%]">
        <img
          src={!isVsCpu ? player2 : cpu}
          alt={
            !isVsCpu
              ? "A smiling yellow face pointed toward the left"
              : "A straight yellow face looking forward"
          }
        />
      </div>
    </div>
  );
};
