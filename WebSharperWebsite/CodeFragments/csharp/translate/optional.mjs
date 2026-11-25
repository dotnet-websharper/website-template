Price(qty, unit = 2, fee = 0, discount = 0) {
  return qty * unit + fee - discount;
}
