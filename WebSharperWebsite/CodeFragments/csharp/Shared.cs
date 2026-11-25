using WebSharper;

namespace Shop;

// One type, used by the server, the client and the wire format.
[JavaScript]
public record Product(string Name, double Price);
