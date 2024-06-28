import Home from "~/pages/Home";
import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Admin from "~/pages/Admin";
import Profile from "~/pages/Profile";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
  { path: "/profile", component: Profile },
  { path: "/system-admin", component: Admin, isPrivate: true },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
