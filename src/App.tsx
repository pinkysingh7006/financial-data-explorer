import Navbar from "./Componnets/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./index.css";
function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Dashboard />
      </main>

    </div>
  );
}

export default App;