export default function Header({ onToggleDarkMode, isDarkMode }) {
  return (
    <header className={`flex justify-between items-center p-4 `}>
      <div className="flex items-center gap-2 text-3xl">
        <i className="fas fa-snowflake"></i>
        <div>
          <span
            className={`font-semibold ${
              isDarkMode ? "text-blue-100" : "text-blue-900"
            }`}
          >
            SnowFlake
          </span>
          <span
            className={`font-light ${
              isDarkMode ? "text-blue-200" : "text-blue-800"
            }`}
          >
            Fall
          </span>
        </div>
      </div>
      <button
        onClick={onToggleDarkMode}
        className={`border p-1 text-xs rounded-lg ${
          isDarkMode
            ? "border-blue-200 hover:bg-blue-700 text-blue-200"
            : "border-blue-900 hover:bg-blue-300 text-blue-900"
        }`}
      >
        {isDarkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </header>
  );
}
