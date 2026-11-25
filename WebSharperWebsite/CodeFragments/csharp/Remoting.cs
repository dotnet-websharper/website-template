using WebSharper;

namespace Shop;

public static class Remoting
{
    static readonly Product[] Catalog = {
        new("Keyboard", 49.0),
        new("Monitor", 189.0),
        new("Mouse", 19.0)
    };

    // A typed server function; the client calls it like a local method.
    [Remote]
    public static Task<Product[]> Search(string query) =>
        Task.FromResult(Catalog
            .Where(p => p.Name.Contains(query, StringComparison.OrdinalIgnoreCase))
            .ToArray());
}
