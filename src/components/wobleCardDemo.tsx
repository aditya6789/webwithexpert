
import EcoBazar from "../../public/images/ecobazar.png";
import { WobbleCard } from "./wobblecard";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="w-full">
          <div className="flex justify-start items-center gap-10 bg-white shadow-xl rounded-3xl py-5 px-3">
            <img
              src="https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/640f4ccd93d5daa33c67d203_team-of-developers-at-brix-agency.png"
              className="rounded-[50px] w-[100px] h-[100px]"
              alt=""
            />
            <h1 className="text-md md:text-4xl font-bold flex items-center">
              <span className="text-blue-300 text-4xl md:text-6xl">5+</span>Amazing
              Developers
            </h1>
          </div>
          <div className="flex justify-end items-center gap-10 bg-white shadow-xl rounded-3xl py-5 px-3 mt-10">
            <h1 className="text-md md:text-4xl  font-bold flex items-center">
              <span className="text-pink-400 text-4xl md:text-6xl">7+</span> Amazing
              Designers
            </h1>
            <img
              src="https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/640f4ccd0d56c72d0a34527f_team-of-designers-at-brix-agency.png"
              className="rounded-[50px] w-[100px] h-[100px]"
              alt=""
            />
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <div>
          <img
            src="https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/640f4ccd0d56c78c4834527e_brix-agency-client-satisfaction.png"
            alt=""
            className="rounded-3xl"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-9xl font-bold text-white">
              97 <span className="text-yellow-300">%</span>
            </h1>
            <h1 className="text-3xl font-semibold text-gray-400">
              Client satisfaction
            </h1>
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="flex justify-between items-end w-full">
          <h1 className="text-5xl font-bold text-white">200+ Website</h1>

          <img src={EcoBazar} alt="" className="h-[500px]" />
        </div>
      </WobbleCard>
    </div>
  );
}
