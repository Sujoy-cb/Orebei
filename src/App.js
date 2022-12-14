import Navbar from "./Components/layout/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import RootLayout from "./Components/layout/RootLayout";



function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}></Route>
    )
  );


  return (
    <RouterProvider router={router} />
  );
}

export default App;
