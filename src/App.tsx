import TerminalPortfolio from "./components/terminal/TerminalPortfolio";

export default function App() {
  return (
    <main
      className="
        h-[100dvh]
        w-full
        max-w-full
        overflow-hidden
        bg-[#010303]
      "
    >
      <TerminalPortfolio />
    </main>
  );
}