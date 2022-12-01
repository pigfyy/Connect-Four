import player1 from "../../../../assets/imgs/player-one.svg";

export default () => {
  const player1Wins = 12;
  return (
    <div className="relative rounded-[23px] border-3px bg-black shadow-mainMenuShadow">
      <div className="flex flex-col rounded-20px bg-white py-[10px] text-center">
        <span className="text-XS font-bold uppercase leading-XS">Player 1</span>
        <span className="text-[2rem] font-bold leading-[41px]">
          {player1Wins}
        </span>
      </div>
      <div className="absolute left-[-27px] top-[50%] translate-y-[-50%]">
        <img src={player1} alt="" />
      </div>
    </div>
  );
};
