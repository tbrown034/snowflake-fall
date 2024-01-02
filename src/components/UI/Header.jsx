export default function Header({ onToggleDarkMode, isDarkMode }) {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-2xl">
        <i className="fas fa-snowflake"></i>
        <div>
          <span
            className={`font-semibold ${
              isDarkMode ? "text-blue-200" : "text-blue-900"
            }`}
          >
            SnowFlake
          </span>
          <span
            className={`font-light ${
              isDarkMode ? "text-blue-200" : "text-blue-900"
            }`}
          >
            Fall
          </span>
        </div>
      </div>
      <button
        onClick={onToggleDarkMode}
        className={`border p-1 text-xs rounded-lg transition-colors duration-300 ${
          isDarkMode
            ? "border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-blue-300"
            : "border-blue-800 hover:bg-blue-800 hover:text-blue-200 text-blue-800"
        }`}
      >
        {isDarkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </header>
  );
}
