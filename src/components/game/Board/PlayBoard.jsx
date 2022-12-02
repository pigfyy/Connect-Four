import boardLayerBlackSmall from "../../../assets/imgs/board-layer-black-small.svg";
import boardLayerWhiteSmall from "../../../assets/imgs/board-layer-white-small.svg";
import boardLayerBlackLarge from "../../../assets/imgs/board-layer-black-large.svg";
import boardLayerWhiteLarge from "../../../assets/imgs/board-layer-white-large.svg";

import counterRedSmall from "../../../assets/imgs/counter-red-small.png";
import counterRedLarge from "../../../assets/imgs/counter-red-large.svg";
import counterYellowSmall from "../../../assets/imgs/counter-yellow-small.png";
import counterYellowLarge from "../../../assets/imgs/counter-yellow-large.svg";

export default () => {
  return (
    <>
      <div className="mx-auto grid grid-cols-1 grid-rows-1">
        <div className="col-start-1 row-start-1">
          <img src={boardLayerBlackSmall} alt="" />
        </div>
        <div className="col-start-1 row-start-1">
          <img src={boardLayerWhiteSmall} alt="" />
        </div>
        <div className="col-start-1 row-start-1">
          <div>
            <div className="inline-flex">
              <div className="grid grid-cols-7 grid-rows-6 gap-[6.4px] pt-[8px] pl-[8px]">
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-1 row-start-1"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-7 row-start-6"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-1 row-start-6"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-7 row-start-1"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-3 row-start-2"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-4 row-start-5"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-4 row-start-6"
                />
                <img
                  src={counterYellowSmall}
                  alt=""
                  className="col-start-5 row-start-6"
                />
                <img
                  src={counterRedSmall}
                  alt=""
                  className="col-start-2 row-start-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
