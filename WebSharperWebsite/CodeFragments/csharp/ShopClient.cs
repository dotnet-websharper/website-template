using WebSharper;
using WebSharper.UI;
using WebSharper.UI.Client;
using static WebSharper.UI.Client.Html;

namespace Shop;

[JavaScript]
public static class Client
{
    public static IControlBody SearchBox()
    {
        var results = Var.Create(Enumerable.Empty<Product>());

        return new Template.Main.SearchForm()
            .OnSearch(async e =>
            {
                // A remote call: arguments and results cross the wire typed.
                results.Value = await Remoting.Search(e.Vars.Query.Value);
            })
            .Results(results.View.DocSeqCached(
                (Product p) => p.Name,
                (Product p) => li($"{p.Name}: ${p.Price}")
            ))
            .Doc();
    }
}
