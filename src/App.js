import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./layout/PrivateRoute";
import { AllRoutes } from "./routes/pageRoutes";
import "./App.css";
import PageNotFound from "./components/page not found";

function App() {
  return (
    <Routes>
      {AllRoutes?.map((item, index) => {
        return (
          <Route
            key={index}
            exact
            path={item.path}
            element={
              item?.isPrivate ? (
                <PrivateRoute>{item?.element}</PrivateRoute>
              ) : (
                item?.element
              )
            }
          />
        );
      })}
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
