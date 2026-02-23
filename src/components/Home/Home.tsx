import {
    BatteryFull,
    Camera,
    Globe,
    Power,
    Search,
    User,
    Wifi,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Widgets from "./HomeWidgets/Widgets";
import keypadImage from "../../../public/keypad1.png";
import SmilePNG from "../../../public/smile.png";
import HomeTypes from "./HomeTypes";
import PasswordChecker from "./PasswordChecker";

const timeWithoutSeconds = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
});

const Home: React.FC = () => {
    const [unlocked, setUnlocked] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className="fixed inset-0 text-white overflow-hidden"
            style={{
                backgroundImage: "url('/home1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={() => setUnlocked(true)}
        >
            {/*  Background overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/*  LOCK SCREEN */}
            <div
                className={`
          absolute inset-0 transition-all duration-700 ease-out
          ${unlocked ? "opacity-0 -translate-y-12 pointer-events-none" : "opacity-100"}
        `}
            >
                {/* 🔝 TOP BAR */}
                <div className="absolute top-0 left-0 w-full flex items-start justify-between px-8 pt-6 z-10">

                    {/* LEFT */}
                    <div className="flex flex-col items-center gap-2 opacity-90">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl">
                            <Search className="w-9 h-9" />
                        </div>
                        <span className="text-xs text-white/80">Search Portfolio</span>
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col items-center text-center max-w-xl">
                       
                        <img
                            src={SmilePNG}
                            alt="Recruiters"
                            className="w-40 h-40 mb-2 mt-6 invert brightness-200"
                        />


                 
                        <span className="text-xl text-white/80">
                            Welcome back. Click anywhere to unlock.
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-center gap-2 opacity-90">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl">
                            <Camera className="w-10 h-10 p-1" />
                        </div>
                        <span className="text-xs text-white/80">Like this image?</span>
                    </div>
                </div>

                {/* ⏰ CLOCK */}
                <div className="flex h-full w-full flex-col items-center justify-center -translate-y-24 z-10">
                    <div className="text-[10rem] font-light leading-none tracking-tight select-none">
                        {timeWithoutSeconds}
                    </div>
                    <div className="text-2xl text-white/80 mt-2">
                        {formattedDate}
                    </div>

                    <div className="mt-20 bg-black/30 backdrop-blur-md p-4 rounded-full">
                        <Globe className="w-6 h-6 text-white/90" />
                    </div>
                </div>

                {/*  WIDGETS */}
                <Widgets />

                {/*  SYSTEM TRAY */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl z-10">
                    <Wifi className="w-5 h-5 text-white/90" />
                    <BatteryFull className="w-5 h-5 text-white/90"/>
                    <Power className="w-5 h-5 text-white/90"/>
                </div>
            </div>

            <div
                className={`
    absolute inset-0 flex items-center justify-center
    transition-all duration-700 ease-out
    ${unlocked ? "opacity-100" : "opacity-0 blur-20 pointer-events-none"}
  `}
            >
                <div
                    className="flex flex-col items-center justify-center px-10 py-8 border-none"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Avatar */}
                    <div className="w-80 h-80 rounded-full bg-white flex flex-col items-center justify-center mb-4">
                        <User className="w-60 h-60 text-gray-600" />

                    </div>

                    {/* Username */}
                    <div className="text-6xl text-white/90 mb-6">
                        Guest User
                    </div>
                    <div>
                        <img
                            src={keypadImage}
                            alt="Recruiters"
                            className="w-20 h-20 mb-2 mt-6 invert brightness-200"
                        />


                    </div>
                    <span className="mx-auto mb-4 px-3 py-1 text-white/80 text-3xl mt-6">
                        Enter your PIN
                    </span>

                    <PasswordChecker correctPassword="1234" onSuccess={() => navigate("/desktop")} />
                    {/* Helper text */}
                    <div className="mt-3 text-sm text-white/60 cursor-pointer hover:text-white/80 transition">
                        Forgot pin?
                    </div>
                    <span className="text-white/90 text-xl mt-4 mb-6">Recruiters enter "1234" as pin to log in</span>
                </div>
            <div className="absolute bottom-6 left-6 flex flex-col gap-3  px-4 py-2 ">
                {HomeTypes.map((type) => (
                    <div key={type.name} className="flex items-center hover:bg-black/40 cursor-pointer hover:p-2 hover:rounded-lg gap-2">
                        <type.icons className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md  px-4 py-2 cursor-pointer text-white/90" />
                        <span className="text-white/90">{type.name}</span>
                    </div>
                ))}

            </div>
            </div>
            {/*  SYSTEM TRAY */}
            <div className="absolute bottom-6 right-6 flex items-center gap-4 px-4 py-2 rounded-xl">
                <Wifi className="w-5 h-5 text-white/90" />
                <BatteryFull className="w-5 h-5 text-white/90" />
                <Power className="w-5 h-5 text-white/90" />
            </div>

        </div>
    );
};

export default Home;
