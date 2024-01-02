export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2 text-3xl">
        <i className="fas fa-snowflake"></i>{" "}
        <div>
          <span className="text-blue-900 dark:text-blue-800">SnowFlake</span>
          <span className="text-blue-300 dark:text-blue-500">Fall</span>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="border border-white p-1 text-xs rounded-lg hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
