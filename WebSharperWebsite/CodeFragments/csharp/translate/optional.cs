public int Price(int qty, int unit = 2, int fee = 0, int discount = 0)
    => qty * unit + fee - discount;
