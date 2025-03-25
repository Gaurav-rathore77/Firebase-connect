import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar - Fixed at the Top */}
      <div className="fixed top-0 left-0 w-full bg-blue-500 h-16 shadow-lg z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
      <div className="pt-16 p-4">
        <h1 className="text-2xl">Main Content Here</h1>
        <p>Scroll karke check kar sakte ho, navbar top pe fixed rahega.</p>
      </div>
    </div>
  );
}

export default App;
