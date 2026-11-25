static TopNames(people) {
  return ofSeq(
    map((a) => a.Name.toUpperCase(),
      Take(
        OrderByDescending(
          filter((p) => p.Age >= 18, people),
          (p) => p.Score, new BaseComparer()),
        3)));
}
