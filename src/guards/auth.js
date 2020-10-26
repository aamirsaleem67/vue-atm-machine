import router from "../router/index";
import store from "../store/index";

router.beforeEach((to, _, next) => {
  // Determine whether the user has logged in
  console.log("store", store);
  if (!store.isAunthenticated) {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }

  if (store.isAunthenticated) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  }
});
