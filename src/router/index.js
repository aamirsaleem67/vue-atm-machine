import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Main from "../components/Main.vue";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "",
    component: Main,
    children: [
      {
        path: "/",
        name: "Home",
        redirect: "/account-options"
      },
      {
        path: "/account-options",
        name: "AccountOptions",
        component: () => import("../components/Account-Options.vue")
      }
    ]
  },

  // no path is match redirect to the home page
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
