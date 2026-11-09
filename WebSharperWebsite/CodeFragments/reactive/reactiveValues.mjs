import Var from "./WebSharper.UI/WebSharper.UI.Var.js";
import { Map } from "./WebSharper.UI/WebSharper.UI.View.js";

// One reactive value ...
const count = Var.Create(0);
// ... and two derived views that recompute when it changes.
const square = Map((n) => n * n, count.View);
const parity = Map((n) => (n % 2 === 0 ? "even" : "odd"), count.View);

// Fill the holes in index.html and bind the template to the page.
IndexTemplate()
  .Count(count)
  .Squared(Map(String, square))
  .Parity(parity)
  .Decrement((el, ev) => { count.Value = count.Value - 1; })
  .Increment((el, ev) => { count.Value = count.Value + 1; })
  .Reset((el, ev) => { count.Value = 0; })
  .Bind();
