public struct Point
{
    public int X;
    public int Y;
    public void Move(int dx) { X += dx; }
}

public object Structs(Point p1)
{
    var p2 = p1;
    p2.X = 10;        // p1.X is still unchanged
    Nudge(p1);        // passed by value
    object boxed = p1;
    return boxed;
}
