import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeTemplate } from "../index";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}
