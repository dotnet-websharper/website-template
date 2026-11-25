public async Task<int> CountDown()
{
    var i = 0;
    while (i < 10)
    {
        await Task.Delay(100);
        i++;
    }
    return i;
}
