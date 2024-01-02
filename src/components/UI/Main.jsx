export default function Main({ onStartGame }) {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-center">
        <button
          onClick={onStartGame}
          className="p-2 px-8 border-4 border-blue-600 hover:bg-blue-600 hover:text-blue-100 active:bg-blue-700 text-blue-900 rounded-lg transition-colors duration-300"
        >
          Start Game
        </button>
      </div>
    </main>
  );
}
