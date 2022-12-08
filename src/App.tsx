import Header from "../src/components/Header"
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
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
          <Route index element={<MyProjects />} />
        </Route>
      </Routes>
    </>
  )
}
