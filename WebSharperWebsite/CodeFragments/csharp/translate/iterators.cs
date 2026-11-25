public IEnumerable<int> Ticks()
{
    try
    {
        while (true)
            yield return 1;
    }
    finally
    {
        Disposed = true;
    }
}
