import Main from "./Components/Main";
import { BrowserRouter, HashRouter, } from "react-router-dom";
import React from "react";
import "./index.css";
import ScrollToTop from "./Components/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <HashRouter  >
      <ScrollToTop />
      <Main />
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            style: {
              color: "white",
              background: "green",
            },
          },
          error: {
            style: {
              color: "white",
              background: "red",
            },
          },
        }}
      />
    </HashRouter>
  );
}

export default App;
