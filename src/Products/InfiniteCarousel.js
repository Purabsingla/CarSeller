import {
    RxCamera,
    RxCalendar,
    RxBoxModel,
    RxComponent2,
    RxComponentNone
} from "react-icons/rx";

import {
    SiGooglebigtable,
    SiGooglemaps,
    SiGooglescholar,
    SiGooglepay
} from 'react-icons/si'
import { FcGoogle } from "react-icons/fc";
const LOGOS = [
    <RxCamera width={24} height={24} className=" text-slate-800 text-4xl" />,
    <RxCalendar width={24} height={24} className="text-slate-800 text-4xl" />,
    <RxBoxModel width={24} height={24} className=" text-slate-800 text-4xl" />,
    <RxComponent2 width={24} height={24} className="text-slate-800 text-4xl" />,
    <RxComponentNone width={24} height={24} className="text-slate-800 text-4xl" />,
    <FcGoogle width={24} height={24} className="text-slate-800 text-4xl" />,
    <SiGooglebigtable width={24} height={24} className="text-slate-800 text-4xl" />,
    <SiGooglemaps width={24} height={24} className="text-slate-800 text-4xl" />,
    <SiGooglescholar width={24} height={24} className="text-slate-800 text-4xl" />,
    <SiGooglepay width={24} height={24} className="text-slate-800 text-4xl" />,
];

function InfiniteSlider() {
    return (
        <div className="relative m-auto w-3/4 h-20 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">/
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default InfiniteSlider