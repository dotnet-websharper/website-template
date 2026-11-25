Structs(p1) {
  const p2 = Clone(p1);
  p2.X = 10;
  Examples.Nudge(Clone(p1));
  const boxed = Clone(p1);
  return boxed;
}
