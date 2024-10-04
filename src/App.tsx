import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Layout from "./hoc/Layout";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Detailpage from "./pages/Detailpage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<Detailpage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
