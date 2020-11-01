import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Main from "../components/Main.vue";
import CashOptions from "../components/Cash-Options.vue";
import CashWithdraw from "../components/Cash-Withdraw.vue";
import AccountGuard from "../guards/account";

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
      },
      {
        path: "/account/:accountType",
        beforeEnter: AccountGuard,
        component: () => import("../components/Account.vue"),
        children: [
          {
            path: "",
            name: "account",
            redirect: "cash-options"
          },
          {
            path: "cash-options",
            component: CashOptions
          },
          {
            path: "cash-withdraw",
            name: "cashWithdraw",
            component: CashWithdraw
          }
        ]
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
