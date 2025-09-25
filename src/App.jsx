import Home from "./components/pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen bg-blue-800">
        {/* Ini untuk tampilan pages/Home.jsx  */}
        <div className="">
          <Home />
        </div>

        <div>footer</div>
      </div>
    </>
  );
}

export default App;
