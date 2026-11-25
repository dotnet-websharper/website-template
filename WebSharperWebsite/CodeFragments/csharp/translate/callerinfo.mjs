static Check(condition, message = null) {
  if (!condition) throw new Error("Failed: " + message);
}

Checkout(cart) {
  Examples.Check(length(cart) > 0, "cart.Count > 0");
}
