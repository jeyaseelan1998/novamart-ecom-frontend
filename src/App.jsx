import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";

const Home = lazy(() => import('./pages/Home'));

const suspense = (Component) => <Suspense fallback={<Spinner className='fixed-center' />}><Component /></Suspense>;

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path="/" element={suspense(Home)} />
      </Routes>
    </BrowserRouter>
  )
}
