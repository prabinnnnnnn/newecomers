import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen w-screen bg-[#faf9f6] grid grid-rows-[15%,85%] max-sm:grid-rows-[9%,91%]">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
