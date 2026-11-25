import Var from "./WebSharper.UI/WebSharper.UI.Var.js";
import { Map2 } from "./WebSharper.UI/WebSharper.UI.View.js";

const x = Var.Create(1);
const y = Var.Create(1);

// Fill the holes in index.html and bind it to the page.
IndexTemplate()
  .X(x)
  .Y(y)
  .Sum(Map2((a, b) => String(a + b), x.View, y.View))
  .Bind();
