import Taskbar from "./Taskbar";
import desktop_apps from "../../configs/desktop_apps";

const Desktop = () => {
  return (
    <div
      className="fixed inset-0 text-white"
      style={{
        backgroundImage: "url('/desktop.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-3 gap-8 w-[18%] pt-10 pl-10">
        {desktop_apps.map((app, index) => (
          <button
            key={index}
            className="
              flex flex-col items-center
              hover:bg-white/15
              hover:scale-110
              transition
              p-2
              rounded-lg
            "
          >
            <img src={app.path} className="w-18 h-18" />
            <span className="mt-5 text-sm text-white/80">
              {app.name}
            </span>
          </button>
        ))}
      </div>

      {/* TASKBAR */}
      <Taskbar />
    </div>
  );
};

export default Desktop;

