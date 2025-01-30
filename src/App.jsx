import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/routeTest" element={<div>테스트 메인페이지</div>} />
      </Routes>
    </>
  );
}

export default App;
