import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
