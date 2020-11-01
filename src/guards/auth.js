import router from "../router/index";
import store from "../store/index";

router.beforeEach((to, _, next) => {
  const isAunthenticated = store.getters["isAuthenticated"];
  // Determine whether the user has logged in
  if (!isAunthenticated) {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }

  if (isAunthenticated) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  }
});
