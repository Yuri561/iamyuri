import React, { useEffect, useState } from "react";
import {
    Sun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudLightning,
    Wind,
} from "lucide-react";
import HomeWidgets, {
    type WeatherWidgetData,
    type HomeWidget,
} from "./HomeWidgets";

/* ---------------- ICON MAPPER ---------------- */

const WeatherIcon = ({ condition }: { condition: string }) => {
    const baseClass = "w-12 h-12 text-white/90";

    switch (condition) {
        case "Clear":
            return <Sun className={`${baseClass} text-yellow-400`} />;
        case "Clouds":
            return <Cloud className={baseClass} />;
        case "Rain":
        case "Drizzle":
            return <CloudRain className={`${baseClass} text-blue-400`} />;
        case "Snow":
            return <CloudSnow className={`${baseClass} text-sky-300`} />;
        case "Thunderstorm":
            return <CloudLightning className={`${baseClass} text-purple-400`} />;
        case "Mist":
        case "Fog":
        case "Haze":
            return <Wind className={baseClass} />;
        default:
            return <Cloud className={baseClass} />;
    }
};

/* ---------------- COMPONENT ---------------- */

const Widgets: React.FC = () => {
    const [weather, setWeather] = useState<WeatherWidgetData | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const res = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=35.7796&longitude=-78.6382&current_weather=true&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto"
            );

            const data = await res.json();

            setWeather({
                location: "Raleigh, NC",
                temp: Math.round(data.current_weather.temperature),
                high: Math.round(data.daily.temperature_2m_max[0]),
                low: Math.round(data.daily.temperature_2m_min[0]),
                condition: "Clear / Cloudy", // map later if you want
                icon: "sun", // local icon
            });
        };
        fetchWeather();
    }, []);

    const renderWidget = (widget: HomeWidget) => {
        switch (widget.type) {
            case "weather":
                return weather ? (
                    <div className="flex items-center justify-between h-full">
                        <div>
                            <div className="text-sm text-white/80">
                                {weather.location}
                            </div>

                            <div className="text-4xl font-semibold leading-none">
                                {weather.temp}°
                            </div>

                            <div className="text-xs text-white/70">
                                {weather.condition}
                            </div>

                            <div className="text-[11px] text-white/50 mt-1">
                                H:{weather.high}° · L:{weather.low}°
                            </div>
                        </div>

                        <WeatherIcon condition={weather.condition} />
                    </div>
                ) : (
                    <div className="text-sm text-white/60">Loading weather…</div>
                );

            case "markets":
                return (
                    <>
                        <div className="text-sm text-white/80 mb-1">
                            Markets
                        </div>

                        <div className="text-xs flex justify-between text-white/70">
                            <span>DOW</span>
                            <span className="text-green-400">
                                ▲ {widget.data.dow}%
                            </span>
                        </div>

                        <div className="text-xs flex justify-between text-white/70">
                            <span>S&amp;P 500</span>
                            <span className="text-green-400">
                                ▲ {widget.data.sp500}%
                            </span>
                        </div>

                        <div className="text-xs flex justify-between text-white/70">
                            <span>NASDAQ</span>
                            <span className="text-red-400">
                                ▼ {Math.abs(widget.data.nasdaq)}%
                            </span>
                        </div>
                    </>
                );

            case "traffic":
                return (
                    <>
                        <div className="text-sm text-white/80 mb-1">
                            Traffic near you
                        </div>

                        <div className="text-xs text-white/70">
                            {widget.data.location}
                        </div>

                        <span
                            className={`mt-2 inline-block px-2 py-0.5 rounded-full text-[11px]
                ${widget.data.status === "Light"
                                    ? "bg-green-500/20 text-green-400"
                                    : widget.data.status === "Moderate"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-red-500/20 text-red-400"
                                }
              `}
                        >
                            {widget.data.status} traffic
                        </span>
                    </>
                );

            case "alarms":
                return (
                    <>
                        <div className="text-sm text-white/80 mb-1">
                            System Alerts
                        </div>

                        <div className="text-3xl font-semibold leading-none">
                            {widget.data.active}
                        </div>

                        <div className="text-xs text-white/60 mt-1">
                            Highest: {widget.data.highest}
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            {HomeWidgets.map(widget => (
                <div
                    key={widget.ID}
                    className="
            w-72 h-32
            rounded-lg
            bg-white/10
            backdrop-blur-md
            border border-white/10
            px-4 py-3
            text-white
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            transition
            hover:bg-white/15
          "
                >
                    {renderWidget(widget)}
                </div>
            ))}
        </div>
    );
};

export default Widgets;
