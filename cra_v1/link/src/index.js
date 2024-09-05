import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Movie from "./pages/Movie";
import Reservation from "./pages/Reservation";
import Theater from "./pages/Theater";
import Event from "./pages/Event";
import Store from "./pages/Store";
import Membership from "./pages/Membership";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

let currentPath = "";
export default function App() {
  let location = useLocation();

  useEffect(() => {
    if(currentPath === location.pathname) window.location.reload();
     
    currentPath = location.pathname;
  }, [location]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movie />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="theater" element={<Theater />} />
          <Route path="event" element={<Event />} />
          <Route path="store" element={<Store />} />
          <Route path="membership" element={<Membership />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);