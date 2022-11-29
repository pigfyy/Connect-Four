import logo from "../assets/imgs/logo.svg";
import playerVsPlayer from "../assets/imgs/player-vs-player.svg";
import playerVsCpu from "../assets/imgs/player-vs-cpu.svg";

export default () => {
  return (
    <>
      <div className="flex min-h-screen items-center bg-purple-400">
        <div className="mx-auto flex w-9/10 flex-col items-center justify-center gap-20">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex w-full flex-col gap-7">
            <button className="flex min-h-70px rounded-t-xl bg-black">
              <div className="flex w-full justify-between rounded-20px bg-pink px-5 py-3">
                <span className="my-auto text-M font-bold uppercase leading-M text-white">
                  Play Vs Cpu
                </span>
                <div className="my-auto">
                  <img src={playerVsCpu} alt="player vs cpu icon" />
                </div>
              </div>
            </button>
            <button className="flex min-h-70px rounded-t-xl bg-black">
              <div className="flex w-full justify-between rounded-20px bg-yellow px-5 py-3">
                <span className="my-auto text-M font-bold uppercase leading-M">
                  Play Vs Player
                </span>
                <div className="my-auto">
                  <img src={playerVsPlayer} alt="player vs cpu icon" />
                </div>
              </div>
            </button>
            <button className="flex min-h-70px rounded-t-xl bg-black">
              <div className="flex w-full justify-between rounded-20px bg-white px-5 py-3">
                <span className="my-auto text-M font-bold uppercase leading-M">
                  Game Rules
                </span>
              </div>
            </button>

            {/* <button className="flex min-h-70px flex-row justify-between bg-yellow px-5 py-3">
              <span className="my-auto text-M font-bold uppercase leading-M">
                Play Vs Player
              </span>
              <div className="my-auto">
                <img src={playerVsPlayer} alt="player vs player icon" />
              </div>
            </button>
            <button className="flex min-h-70px bg-white px-5 py-3">
              <span className="my-auto text-M font-bold uppercase leading-M">
                Game Rules
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
