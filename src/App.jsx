import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import VisitHistory from "./components/VisitHistory";
function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="hero">
        <Home />
      </div>
      <div className="visitHistory">
        <VisitHistory />
      </div>
    </>
  );
}

export default App;
