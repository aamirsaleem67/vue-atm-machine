const allowedAccounts = ["current", "savings"];

export default (to, _, next) => {
  if (allowedAccounts.includes(to.params.accountType)) {
    next();
  } else {
    next("/");
  }
};
