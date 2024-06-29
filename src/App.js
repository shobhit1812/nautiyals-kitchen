import { lazy, Suspense, useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import store from "./utility/store";
const Help = lazy(() => import("./components/Help"));

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        isDark ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-800"
      } flex flex-col min-h-screen`}
    >
      <Provider store={store}>
        <Header value={toggleTheme} isDark={isDark} />
        {
          <main className="flex-grow">
            <Outlet />
          </main>
        }
        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: (
          <Suspense
            fallback={
              <h1 className="m-6 flex justify-center underline center font-medium text-6xl">
                Loading...
              </h1>
            }
          >
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter;
