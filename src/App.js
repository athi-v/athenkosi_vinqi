import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; //navigation component
import Contact from "./pages/Contact"; //contact page
import Hero from "./pages/Hero"; //hero or home page, where slider is added
function App() {
  return (
    // path is simply the page
    // element usually has the component/page that the path is given
    // "/" simply means redirecting home page
    // "/contact" goes to contact page
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
