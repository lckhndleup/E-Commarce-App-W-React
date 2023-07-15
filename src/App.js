import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PageContainer from "./Containers/PageContainer";

function App() {
  return (
    <div className="App">
      <PageContainer>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer/>
      </Router>
      </PageContainer>
    </div>
  );
}

export default App;
