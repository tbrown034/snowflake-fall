export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-blue-800" : "bg-blue-100"
      }`}
    >
      <div className="flex items-center gap-2 text-3xl">
        <i className="fas fa-snowflake"></i>{" "}
        <div>
          <span
            className={`text-blue-900 ${darkMode ? "dark:text-blue-100" : ""}`}
          >
            SnowFlake
          </span>
          <span
            className={`text-blue-800 ${darkMode ? "dark:text-blue-200" : ""}`}
          >
            Fall
          </span>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className={`border ${
          darkMode ? "border-blue-200" : "border-blue-900"
        } p-1 text-xs rounded-lg hover:bg-blue-300 dark:hover:bg-blue-700 transition-colors`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
