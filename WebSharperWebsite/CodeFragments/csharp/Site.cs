using WebSharper;
using WebSharper.Sitelets;
using WebSharper.UI;
using static WebSharper.UI.Html;

namespace Shop;

public class Site
{
    [EndPoint("/")]
    public record Home;

    // The server renders the page; client(...) marks where the browser takes over.
    [Website]
    public static Sitelet<object> Main =>
        new SiteletBuilder()
            .With<Home>((ctx, endpoint) =>
                Content.Page(
                    new Template.Main()
                        .Title("Shop")
                        .Body(doc(
                            h1("Find a product"),
                            div(client(() => Client.SearchBox()))
                        ))
                        .Doc()
                )
            )
            .Install();
}
