import Header from "../src/components/Header"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Main from "./components/Main";
import GlobalStyle from './style/globalStyle';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} />
          <Route path="Projetos" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}
