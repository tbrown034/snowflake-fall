import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Main from "./components/UI/Main";
import GameBoard from "./components/UI/GameBoard";

function App() {
  return (
    <div className="min-h-screen p-4 bg-sky-900 text-sky-50  flex center flex-col justify-between">
      <Header />
      <Main />
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
