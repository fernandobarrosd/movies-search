import { BrowserRouter } from "react-router-dom"
import { MovieProvider } from "./context/MovieContext";
import { AppRoutes } from "./routes"
import { GlobalStyle } from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}