import "./App.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/routeTest" element={<div>테스트 메인페이지</div>} />
        <Route path="/routeTest/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
