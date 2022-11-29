import Header from "../src/components/Header"
import Home from "./pages/home";
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
        </Route>
      </Routes>
    </>
  )
}