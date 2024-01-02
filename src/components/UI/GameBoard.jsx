export default function Main({ onBackToStart }) {
  return (
    <main className="flex flex-col gap-4">
      <div className=" border-2  border-blue-950 p-4 min-h-96  "></div>
      <button
        onClick={onBackToStart}
        className=" p-2 px-8  border-4  border-blue-950 hover:bg-blue-800 hover:text-blue-100 active:bg-blue-900 rounded-lg"
      >
        Go Back
      </button>
    </main>
  );
}
