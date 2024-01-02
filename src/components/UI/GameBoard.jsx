export default function GameBoard({ onBackToStart }) {
  return (
    <main className="flex flex-col gap-4">
      <div className="border-2 border-blue-950 p-4 min-h-96"></div>
      <button
        onClick={onBackToStart}
        className="p-2 px-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-blue-100 active:bg-blue-700 text-blue-900 rounded-lg transition-colors duration-300"
      >
        Go Back
      </button>
    </main>
  );
}
