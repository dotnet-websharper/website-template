using WebSharper;
using WebSharper.UI;
using WebSharper.UI.Client;

namespace CSharpTasks;

[JavaScript]
public static class App
{
    [SPAEntryPoint]
    public static void ClientMain()
    {
        // Reactive state: the page updates itself when these change.
        var tasks = ListModel.FromSeq(new[] {
            "Write the UI in C#",
            "Let WebSharper compile it to JavaScript"
        });
        var newTask = Var.Create("");

        new Template.Index()
            .Tasks(tasks.View.DocSeqCached((string task) =>
                new Template.Index.TaskItem()
                    .Title(task)
                    .Done(() => tasks.Remove(task))
                    .Doc()
            ))
            .NewTask(newTask)
            .Add(() =>
            {
                var title = newTask.Value.Trim();
                if (title != "") tasks.Add(title);
                newTask.Value = "";
            })
            .Remaining(tasks.View.Map(ts => $"{ts.Count()} to go"))
            .Bind();
    }
}
