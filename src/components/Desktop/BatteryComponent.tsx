import React from "react";
import { useBattery } from "react-use";

const BatteryComponent: React.FC = () => {
  const battery = useBattery();

  if (!battery.isSupported) return null;

  const charging = battery.fetched ? battery.charging : false;
 
  
  return (
    <div className="flex items-center h-6 px-1">
      <div className="relative w-[25px] h-[13px] border border-white/80 rounded-sm">
        <div
          className={`h-full rounded-[1px] ${
            charging ? "bg-green-500" : "bg-white"
          }`}
          
        />

        <div className="absolute -right-[3px] top-[2px] w-[2px] h-[6px] bg-white/80 rounded-sm" />

        {charging && (
          <span className="absolute inset-0 flex items-center justify-center text-[8px] text-white font-bold">
            ⚡
          </span>
        )}
      </div>
    </div>
  );
};

export default BatteryComponent;
