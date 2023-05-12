import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Conteudo from "./pages/Conteudo/Conteudo";
import Nav from "./components/Nav";
import Cadastro from "./pages/cadastro/Cadastro";
import Page from "./pages/admin/page/Page";
import Inserir from "./pages/admin/InserirDado/Inserir";
import Edit from "./pages/admin/edit/Edit";
import Item from "./pages/Conteudo/Item";
import About from "./about/About";
import NotFound from "./NotFound";
import EditDev from "./pages/admin/edit/EditDev";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Conteudo />}></Route>
          <Route path="/" element={<Conteudo />}></Route>
          <Route path="/:id" element={<Item />}></Route>
          <Route path="/descricao/:id" element={<Conteudo />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/admin" element={<Page />}></Route>
          <Route path="/admin/edit/:id" element={<Edit />}></Route>
          <Route path="/admin/editdev/:id" element={<EditDev />}></Route>
          <Route path="/admin/inserir" element={<Inserir />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
