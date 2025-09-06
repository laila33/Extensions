import img1 from "./assets/img4.png";
import img2 from "./assets/img3.png";
import img3 from "./assets/img5.png";
import img4 from "./assets/img6.png";
import img5 from "./assets/img7.png";
import img6 from "./assets/img8.png";
import img7 from "./assets/img9.png";
import img8 from "./assets/Extension1.png";
import img9 from "./assets/Extension2.png";
import img10 from "./assets/Extension3.png";
import img11 from "./assets/Extension4.png";
import img12 from "./assets/Extension5.png";
import img13 from "./assets/Extension6.png";
import img14 from "./assets/_Toggle2.png";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-5/6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img1} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  DevLens
                </h2>
                <p>
                  Quickly inspect page layouts and visualize element boundaries.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img3} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  StyleSpy
                </h2>
                <p>Instantly analyze and copy CSS from any webpage element.</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img4} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  SpeedBoost
                </h2>
                <p>
                  Optimizes browser resource usage to accelerate page loading.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img14} />
            </div>
          </div>

          {/* Card 4 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img5} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  JSONWizard
                </h2>
                <p>
                  Formats, validates, and prettifies JSON responses in-browser.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 5 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img5} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  TabMaster Pro
                </h2>
                <p>Organizes browser tabs into groups and sessions.</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 6 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img7} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  ViewportBuddy
                </h2>
                <p>
                  Simulates various screen resolutions directly within the
                  browser.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img14} />
            </div>
          </div>

          {/* Card 7 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img8} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  Markup Notes
                </h2>
                <p>
                  Enables annotation and notes directly onto webpages for
                  collaborative debugging.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 8 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img9} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  GridGuides
                </h2>
                <p>
                  Overlay customizable grids and alignment guides on any
                  webpage.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img14} />
            </div>
          </div>

          {/* Card 9 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img10} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  Palette Picker
                </h2>
                <p>Instantly extracts color palettes from any webpage.</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 10 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img11} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  LinkChecker
                </h2>
                <p>Scans and highlights broken links on any page.</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>

          {/* Card 11 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img12} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  DOM Snapshot
                </h2>
                <p>Capture and export DOM structures quickly.</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img14} />
            </div>
          </div>

          {/* Card 12 */}
          <div className="card1 bg-[#FBFDFE] rounded-3xl flex flex-col gap-5">
            <div className="flex gap-5 mt-6 ml-6">
              <img className="w-[60px] h-[60px]" src={img13} />
              <div>
                <h2 className="font-bold text-[#091540] text-2xl mb-2">
                  ConsolePlus
                </h2>
                <p>
                  Enhanced developer console with advanced filtering and
                  logging.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 ml-6 mb-6">
              <button className="border border-black rounded-3xl w-[91px] h-[38px]">
                Remove
              </button>
              <img className="w-[36px] h-[20px] mr-6" src={img2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
