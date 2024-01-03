export default function Main({ onStartGame, isDarkMode }) {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-center">
        <button
          onClick={onStartGame}
          className={`p-2 px-8 text-sm rounded-lg border-4 transition-colors duration-300 ${
            isDarkMode
              ? "border-blue-200 text-blue-200 hover:bg-blue-700 hover:text-blue-100 active:bg-blue-800"
              : "border-blue-800 text-blue-800 hover:bg-blue-300 hover:text-blue-900 active:bg-blue-400"
          }`}
        >
          Start Game
        </button>
      </div>
    </main>
  );
}
