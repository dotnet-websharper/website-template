using WebSharper.AspNetCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddWebSharper();

var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();
