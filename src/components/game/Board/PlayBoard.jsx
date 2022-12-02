import boardLayerBlackSmall from "../../../assets/imgs/board-layer-black-small.svg";
import boardLayerWhiteSmall from "../../../assets/imgs/board-layer-white-small.svg";
import boardLayerBlackLarge from "../../../assets/imgs/board-layer-black-large.svg";
import boardLayerWhiteLarge from "../../../assets/imgs/board-layer-white-large.svg";

import counterRedSmall from "../../../assets/imgs/counter-red-small.svg";
import counterRedLarge from "../../../assets/imgs/counter-red-large.svg";
import counterYellowSmall from "../../../assets/imgs/counter-yellow-small.svg";
import counterYellowLarge from "../../../assets/imgs/counter-yellow-large.svg";

export default () => {
  return (
    <>
      <div className="mx-auto grid grid-cols-1 grid-rows-1 px-5">
        <div className="col-start-1 row-start-1">
          <img src={boardLayerBlackSmall} alt="" />
        </div>
        <div className="col-start-1 row-start-1">
          <img src={boardLayerWhiteSmall} alt="" />
        </div>
        {/* <div className="col-start-1 row-start-1">
          <div className="grid grid-cols-7 grid-rows-6 place-items-center gap-x-3 gap-y-[7.8px] px-[10px] py-[9px]">
            <div className="col-start-3 row-start-5">
              <img src={counterYellowSmall} alt="" />
            </div>
            <div className="">
              <img src={counterRedSmall} alt="" />
            </div>
            <div className="">
              <img src={counterRedSmall} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
