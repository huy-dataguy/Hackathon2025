import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Assistant from "../pages/Assistant";
import History from "../pages/History";
import Profile from "../components/Profile";
import SettingProfile from "../pages/SettingProfile";
import CaptureMyDish from "../pages/addImageDish/CaptureMyDish";
import Diet from "../pages/Diet";
import Chat from "../pages/chat/Chat";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/assistant",
        element: <Assistant />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/upload_dish",
        element: <CaptureMyDish />
      },
      {
        path: "/diet",
        element: <Diet />
      },
      
      

    ]
  },
]);

export default router;
