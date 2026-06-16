import { BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <Routes>

        </Routes>
    </BrowserRouter>
  )
}
