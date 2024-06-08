import { Suspense, lazy } from "react";
import "./App.css";

function App() {
  const Form = lazy(() => import("./component/Form"));
  return (
    <>
      <Suspense fallback={<div>Loading.............</div>}>
        <Form />
      </Suspense>
    </>
  );
}

export default App;
