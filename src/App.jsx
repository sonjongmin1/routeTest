import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/routeTest" element={<div>테스트 메인페이지</div>} />
        <Route path="/routeTest/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
