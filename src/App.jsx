import Home from "./components/pages/Home";
import "./App.css";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <div className="h-screen bg-blue-800">
        {/* Ini untuk tampilan pages/Home.jsx  */}
        <div>
          <Navbar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
