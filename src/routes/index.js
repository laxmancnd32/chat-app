import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContainer from "../appContainer";
import Home from "./home";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
