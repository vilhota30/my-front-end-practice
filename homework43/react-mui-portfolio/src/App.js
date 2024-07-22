import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { router } from "./router/routerConfig.js";
import { Loader } from "../src/components/UI/Loader/Loader.jsx";
import store from "./swapiComponents/src/store/store.js";


export function App() {
  return (
    <Provider store={store} >
      <RouterProvider
        router={router}
        fallbackElement={<Loader />}
        future={{ v7_startTransition: true }}
      />
    </Provider>
  );
}

