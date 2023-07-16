import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="hero">
        <Home />
      </div>
    </>
  );
}

export default App;
