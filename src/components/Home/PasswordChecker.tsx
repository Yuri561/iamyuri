import { MoveRight } from "lucide-react";
import React, { useState } from "react";

type PasswordCheckerProps = {
  correctPassword: string;
  onSuccess: () => void;
};

const PasswordChecker: React.FC<PasswordCheckerProps> = ({
  correctPassword,
  onSuccess,
}) => {
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChecking) return;

    setIsChecking(true);
    setErrorMessage("");

    setTimeout(() => {
      if (inputPassword === correctPassword) {
        onSuccess(); // 🔥 ONLY SUCCESS PATH
      } else {
        setErrorMessage("Incorrect PIN. Try again.");
      }
      setIsChecking(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter PIN"
          disabled={isChecking}
          className="
            flex-1 px-4 py-2 rounded-md
            bg-white/20 text-white
            placeholder-white/60
            focus:outline-none focus:ring-2 focus:ring-blue-400/60
          "
        />

        {/* Arrow = submit */}
        <button
          type="submit"
          disabled={isChecking}
          className="
            bg-blue-600/80 hover:bg-blue-700
            p-2 rounded-full
            text-white transition
            disabled:opacity-50
          "
        >
          <MoveRight size={24} />
        </button>
      </form>

      {isChecking && (
        <p className="mt-2 text-sm text-white/70">Checking…</p>
      )}

      {errorMessage && (
        <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
      )}
    </div>
  );
};

export default PasswordChecker;
