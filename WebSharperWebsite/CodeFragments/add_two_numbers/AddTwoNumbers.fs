let x = Var.Create 1
let y = Var.Create 1

// Fill the holes in index.html and bind it to the page.
IndexTemplate()
    .X(x)
    .Y(y)
    .Sum(View.Map2 (fun x y -> string (x + y)) x.View y.View)
    .Bind()
