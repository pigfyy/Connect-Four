import iconCheck from "../assets/imgs/icon-check.svg";

export default () => {
  return (
    <div className="flex min-h-screen items-center bg-purple-400">
      <div className="relative mx-auto flex justify-center">
        <div className="mx-auto w-9/10 max-w-[480px] rounded-t-[30px] rounded-b-[33px] bg-black shadow-mainMenuShadow">
          <div className="flex flex-col gap-8 rounded-40px bg-white px-5 pt-[30px] pb-[60px]">
            <h1 className="text-center text-L font-bold uppercase leading-L">
              Rules
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-S font-bold uppercase leading-S text-purple-400">
                Objective
              </h2>
              <p className="text-XS font-medium leading-XS opacity-2/3">
                Be the first player to connect 4 of the same colored discs in a
                row (either vertically, horizontally, or diagonally).
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-S font-bold uppercase leading-S text-purple-400">
                How To Play
              </h2>
              <ol className="flex flex-col gap-[10px]">
                <li className="flex gap-5">
                  <h3 className="text-XS font-bold leading-XS">1</h3>
                  <span className="text-XS font-medium leading-XS opacity-2/3">
                    Red goes first in the first game.
                  </span>
                </li>
                <li className="flex gap-5">
                  <h3 className="text-XS font-bold leading-XS">2</h3>
                  <span className="text-XS font-medium leading-XS opacity-2/3">
                    Players must alternate turns, and only one disc can be
                    dropped in each turn.
                  </span>
                </li>
                <li className="flex gap-5">
                  <h3 className="text-XS font-bold leading-XS">3</h3>
                  <span className="text-XS font-medium leading-XS opacity-2/3">
                    The game ends when there is a 4-in-a-row or a stalemate
                  </span>
                </li>
                <li className="flex gap-5">
                  <h3 className="text-XS font-bold leading-XS">4</h3>
                  <span className="text-XS font-medium leading-XS opacity-2/3">
                    The starter of the previous game goes second on the next
                    game
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <button className="absolute bottom-[-40px]">
          <img src={iconCheck} alt="" />
        </button>
      </div>
    </div>
  );
};
