static void Check(bool condition,
    [CallerArgumentExpression("condition")] string message = null)
{
    if (!condition) throw new Exception("Failed: " + message);
}

void Checkout(List<string> cart)
{
    Check(cart.Count > 0);
}
