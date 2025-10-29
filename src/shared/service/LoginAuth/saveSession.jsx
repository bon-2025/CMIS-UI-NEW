export const saveSession = (user) => {
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + 1); // 1 hour expiration

  const session = { user, expiry };
  localStorage.setItem("session", JSON.stringify(session));
};
