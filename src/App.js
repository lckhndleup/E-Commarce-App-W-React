import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PageContainer from "./Containers/PageContainer";
import { useSelector } from "react-redux";
import Card from "./Components/Card";

function App() {
  const {drawer} = useSelector(state => state.drawer)

  console.log("drawer",drawer);
  return (
    <div className="App">
      <PageContainer>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          
        </Routes>
        {drawer && <Card/> }
        
      </Router>
      </PageContainer>
      <Footer/>
    </div>
  );
}

export default App;
