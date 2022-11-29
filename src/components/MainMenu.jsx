import logo from "../assets/imgs/logo.svg";
import playerVsPlayer from "../assets/imgs/player-vs-player.svg";
import playerVsCpu from "../assets/imgs/player-vs-cpu.svg";

export default () => {
  return (
    <div className="flex min-h-screen items-center bg-purple-400 tablet:bg-purple-600">
      <div className="mx-auto w-full max-w-480px bg-purple-400 tablet:rounded-40px tablet:border-3px tablet:shadow-mainMenuShadow">
        <div className="mx-auto mt-70px mb-60px flex w-9/10 flex-col items-center justify-center gap-20">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex w-full flex-col gap-7">
            <button className="flex min-h-70px rounded-t-xl bg-black hover:bg-purple-600">
              <div className="flex w-full justify-between rounded-20px bg-pink px-5 py-3">
                <span className="my-auto text-left text-M font-bold uppercase leading-M text-white">
                  Play Vs Cpu
                </span>
                <div className="my-auto">
                  <img src={playerVsCpu} alt="player vs cpu icon" />
                </div>
              </div>
            </button>
            <button className="flex min-h-70px rounded-t-xl bg-black hover:bg-purple-600">
              <div className="flex w-full justify-between rounded-20px bg-yellow px-5 py-3">
                <span className="my-auto text-left text-M font-bold uppercase leading-M">
                  Play Vs Player
                </span>
                <div className="my-auto">
                  <img src={playerVsPlayer} alt="player vs cpu icon" />
                </div>
              </div>
            </button>
            <button className="flex min-h-70px rounded-t-xl bg-black hover:bg-purple-600">
              <div className="flex w-full justify-between rounded-20px bg-white px-5 py-3">
                <span className="my-auto text-left text-M font-bold uppercase leading-M">
                  Game Rules
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
