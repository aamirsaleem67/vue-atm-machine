import router from "../router/index";
const isAunthenticated = true;
router.beforeEach((to, _, next) => {
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
