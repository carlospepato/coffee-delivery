import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { MyContextProvider } from "./contexts/routesContexts";

export function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MyContextProvider>
  )
}
