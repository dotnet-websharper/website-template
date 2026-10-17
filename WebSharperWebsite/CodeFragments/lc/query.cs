public record Article(int Id, string Title, DateTime Date);
// Async/await with Task (supported on client)
public static async Task LoadAndShowAsync(IEnumerable<int> recentIds)
{
    await Task.Delay(10);
    JS.Console.Log($"Recent IDs: {string.Join(", ", recentIds.Select(i => i.ToString()))}");
}
// Iterator (yield)
public static IEnumerable<int> Squares()
{
    for (var i = 1; i <= 5; i++)
        yield return i * i;
}
public static void Main()
{
    var start = new DateTime(2025, 9, 1);

    var articles = new List<Article>
        {
            new(1, "Welcome to WebSharper", new DateTime(2025, 9, 20)),
            new(2, "Async workflows 101", new DateTime(2025, 8, 15)),
            new(3, "Query expressions on client", new DateTime(2025, 9, 28)),
            new(4, "Remoting tips", new DateTime(2025, 7, 5)),
        };

    // LINQ query
    var recentIds =
        from article in articles
        where article.Date > start
        orderby article.Date descending
        select article.Id;

    LoadAndShowAsync(recentIds);

    JS.Console.Log(string.Join(", ", Squares().Select(i => i.ToString())));
}
