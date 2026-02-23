import React from "react";
import { Search, Wifi, Volume2, BatteryFull } from "lucide-react";
import BatteryComponent from "./BatteryComponent";
const Taskbar: React.FC = () => {
  return (
    <div
      className="
        fixed bottom-0 left-0 w-full h-18
        bg-black/70 backdrop-blur-xl
        border-t border-white/10
        flex items-center
        px-6
        z-50
      "
    >
      {/* LEFT – START + SEARCH */}
      <div className="flex items-center gap-4">
        <button className="hover:bg-white/10 p-2 rounded-lg">
          <img src="/windows.png" alt="Start" className="w-8 h-8" />
        </button>

        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-64">
          <Search size={18} className="text-white/70" />
          <span className="text-white/60 text-sm">Search</span>
        </div>
      </div>

      {/* CENTER – PINNED APPS */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
        {[
          "/folder.png",
          "/microsoft.png",
          "/dropbox.png",
          "/drive.png",
          "/vscode.png",
          "/chrome.png",
          "/team.png",
        ].map((icon, i) => (
          <button
            key={i}
            className="
              hover:bg-white/15
              hover:scale-110
              transition
              p-2
              rounded-lg
            "
          >
            <img src={icon} className="w-8 h-8" />
          </button>
        ))}
      </div>

      {/* RIGHT – SYSTEM TRAY */}
      <div className="ml-auto flex items-center gap-4 text-white/80">
        <Wifi size={18} />
        <Volume2 size={18} />
        <BatteryComponent/>

        <div className="text-right text-xs leading-tight">
          <div>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="text-white/50">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
