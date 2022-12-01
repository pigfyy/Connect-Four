import logo from "../../assets/imgs/logo.svg";

export default () => {
  return (
    <>
      <div className="mx-5 flex items-center justify-between">
        <button className="rounded-[20px] bg-purple-600 py-[10px] px-8 text-XS font-bold uppercase leading-XS text-white">
          Menu
        </button>
        <div>
          <img src={logo} alt="logo" className="max-h-[48px]" />
        </div>
        <button className="max-h-10 rounded-[20px] bg-purple-600 py-[10px] px-5 text-XS font-bold uppercase leading-XS text-white">
          Restart
        </button>
      </div>
    </>
  );
};
