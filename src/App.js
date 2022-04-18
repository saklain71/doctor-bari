import { Route, Routes } from "react-router-dom";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
