import { Suspense } from "react";
import { Routes, Route } from "react-router";
import routes from "./routes/routes";
import './App.css';
import { ThemeProvider } from "./utils/ThemeContext";
import Loader from "./components/Common/Loader";
import NotFound from "./pages/not-found";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {routes.map(({ path, component: Component, layout: Layout }) => (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          ))}
           <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
