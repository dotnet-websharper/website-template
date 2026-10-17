import Doc from "./WebSharper.UI/WebSharper.UI.Doc.js";
import {
  Return, Yield, WithSubmit, Run, Render, op_LessMultiplyGreater
} from "./WebSharper.Forms/WebSharper.Forms.Form.js";
import { IsNotEmpty } from "./WebSharper.Forms/WebSharper.Forms.Validation.js";
import { ShowErrors } from "./WebSharper.Forms/WebSharper.Forms.DocExtensions.js";
import { map } from "./WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js";

function LoginForm() {
  return Render(
    (user) => (pass) => (submit) =>
      Doc.Element("form", [], [
        Doc.Element("div", [], [
          Doc.Element("label", [], [Doc.TextNode("Username: ")]),
          Doc.Input([], user)
        ]),
        Doc.Element("div", [], [
          Doc.Element("label", [], [Doc.TextNode("Password: ")]),
          Doc.PasswordBox([], pass)
        ]),
        Doc.Button("Log in", [], () => { submit.Trigger(); }),
        Doc.Element("div", [], [
          ShowErrors(submit.view, (errors) =>
            Doc.Concat(map((m) => Doc.Element("p", [], [Doc.TextNode(m.message)]), errors)))
        ])
      ]),
    Run(
      (values) => alert("Welcome, " + values[0] + "!"),
      WithSubmit(
        op_LessMultiplyGreater(
          op_LessMultiplyGreater(
            Return((user) => (pass) => [user, pass]),
            IsNotEmpty("Must enter a username", Yield(""))),
          IsNotEmpty("Must enter a password", Yield(""))))));
}

Doc.RunById("main", LoginForm());
