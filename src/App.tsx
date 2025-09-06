import { Suspense } from "react";
import { Routes, Route } from "react-router";
import routes from "./routes/routes";
import './App.css';
import { ThemeProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
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
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
