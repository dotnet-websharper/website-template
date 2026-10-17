import Doc from "./WebSharper.UI/WebSharper.UI.Doc.js";
import Var from "./WebSharper.UI/WebSharper.UI.Var.js";
import { Map2 } from "./WebSharper.UI/WebSharper.UI.View.js";

const x = Var.Create(1);
const y = Var.Create(1);

const addNumbers = Doc.Element("div", [], [
  Doc.Element("p", [], [Doc.TextNode("x "), Doc.IntInputUnchecked([], x)]),
  Doc.Element("p", [], [Doc.TextNode("y "), Doc.IntInputUnchecked([], y)]),
  Doc.Element("p", [], [
    Doc.TextView(Map2((a, b) => "x + y = " + String(a + b), x.View, y.View))
  ])
]);

Doc.RunById("main", addNumbers);
