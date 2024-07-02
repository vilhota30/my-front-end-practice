import { RouterProvider } from "react-router-dom";
import { router } from "./router/routerConfig.js";
import { Loader } from "../src/components/UI/Loader/Loader.jsx";

export function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      future={{ v7_startTransition: true }}
    />
  );
}
