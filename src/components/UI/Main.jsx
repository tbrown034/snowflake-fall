export default function Main({ onStartGame }) {
  return (
    <main className=" flex flex-col gap-4">
      <div className="flex justify-center">
        <button
          onClick={onStartGame}
          className=" p-2 px-8  border-4  border-blue-950 hover:bg-blue-800 hover:text-blue-100 active:bg-blue-900 rounded-lg"
        >
          Start Game
        </button>
      </div>
    </main>
  );
}
