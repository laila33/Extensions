import icon from "./assets/Vector.png";
import img15 from "./assets/Settings.png"
export default function FirstSection() {
  return (
    <div className=" flex content-center justify-center	 ">
      <div className="w-5/6 flex justify-between bg-[#FBFDFE] mt-4 rounded-2xl">
        <div className="flex items-center justify-center gap-2.5 ml-4 my-2">
          <img src={icon} />
          <span
            className=" w-[127px] h-[31px] font-semibold  text-[#091540] text-2xl"
          >
            Extensions
          </span>
        </div>
        <div>
          <img className="mr-4 my-2" src={img15} />
        </div>
      </div>
    </div>
  );
}
