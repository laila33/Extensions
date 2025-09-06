export default function Secondsection() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5/6 flex flex-col sm:flex-row justify-between items-center mt-16">
        <div>
          <h1 className="font-bold text-[#091540] text-[34px]">
            Extensions List
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className=" bg-[#C7231A] w-[64px] h-[46px] text-white rounded-3xl">
            All
          </button>
          <button className=" bg-[#FBFDFE] w-[95px] h-[46px] text-[#091540] rounded-3xl">
            Active
          </button>
          <button className=" bg-[#FBFDFE] w-[112px] h-[46px] text-[#091540] rounded-3xl">
            INactive
          </button>
        </div>
      </div>
    </div>
  );
}
