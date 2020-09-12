import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
