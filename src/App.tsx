import Main from "./pages/login/Main";
import Login from "./pages/login/login";
import SignUp from "./pages/login/signUp";
import SendEmail from "./pages/login/sendEmail";
import ForgotPassword from "./pages/login/forgotPassword";
import WorkSpace from "./pages/workSpace";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/sign_up",
          element: <SignUp />
        },
        {
          path: "/forgot_password",
          element: <ForgotPassword />
        },
        {
          path: "/send_email",
          element: <SendEmail />
        },
      ]
    },
    {
      path: "/workspace",
      element: <WorkSpace />
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
