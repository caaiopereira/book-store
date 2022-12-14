import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./view/Layout";
import Home from "./view/Home";
import Contatos from "./view/Contatos";
import Livros from "./view/Livros";
import AddLivros from "./view/AddLivros";
import EditLivros from "./view/EditLivros";
import NoPage from "./view/NoPages";
import Sobre from "./view/Sobre";
import Footer from "./view/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Livros" element={<Livros />} />
          <Route path="AddLivros" element={<AddLivros />} />
          <Route path="EditLivros/:id" element={<EditLivros/>} />
          <Route path="Contatos" element={<Contatos />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);