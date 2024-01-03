export default function GameBoard({ onBackToStart, isDarkMode }) {
  return (
    <main className="flex flex-col gap-4">
      <div className="border-2 border-blue-950 p-4 min-h-96"></div>
      <button
        onClick={onBackToStart}
        className={`p-2 px-8 text-sm rounded-lg border-4 transition-colors duration-300 ${
          isDarkMode
            ? "border-blue-200 text-blue-200 hover:bg-blue-700 hover:text-blue-100 active:bg-blue-800"
            : "border-blue-800 text-blue-800 hover:bg-blue-300 hover:text-blue-900 active:bg-blue-400"
        }`}
      >
        Go Back
      </button>
    </main>
  );
}
